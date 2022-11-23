import { Card } from './card.js';
import { useEffect, useState } from "react";
import Cookie from 'js-cookie';

/**Syled Components**/
import {
    TITLE__h2,
} from './styles.js'

export const ViewChat = ({dataFilter}) => {
    const [dataExchange, setDataExchange] = useState({info:""});

    useEffect(()=>{
        getExchanges();
    },[]);

    const getExchanges = async () => {
        try {
            const response = await fetch('http://localhost:3001/Exchanges',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            // console.log(responseJson.result);
            setDataExchange({
                info: responseJson.result,
            });
            //setIdExchange(responseJson.result);
        } catch (error) {
            console.error(error);
        }
    } 

    return(
        <>
            <div>
                {
                    dataExchange.info.Exchanges ?
                    dataExchange.info.Exchanges.map((value, index) => (
                        value.Id_User_One === dataExchange.info.myId ?
                            dataFilter !== "" ?
                                (value.Id_Book_One[0].name.toLowerCase().includes(dataFilter.toLowerCase()) || 
                                value.Id_Book_Two[0].name.toLowerCase().includes(dataFilter.toLowerCase()) ||
                                value.Id_User_Two[0].name.toLowerCase().includes(dataFilter.toLowerCase())) 
                                ?
                                    <Card myId = {dataExchange.info.myId} value={value} key={index}/>
                                :null
                            : <Card myId = {dataExchange.info.myId} value={value} key={index}/>
                        : dataFilter !== "" ?
                            (value.Id_Book_One[0].name.toLowerCase().includes(dataFilter.toLowerCase()) || 
                            value.Id_Book_Two[0].name.toLowerCase().includes(dataFilter.toLowerCase()) ||
                            value.Id_User_One[0].name.toLowerCase().includes(dataFilter.toLowerCase())) 
                            ?
                                <Card myId = {dataExchange.info.myId} value={value} key={index}/>
                            :null
                        : <Card myId = {dataExchange.info.myId} value={value} key={index}/>
                    ))
                    :<TITLE__h2 className='TitleEmpty'>No tienes chats pendientes...</TITLE__h2>
                }
            </div>
        </>
    );
}