import { Card } from './card.js';
import { useEffect, useState } from "react";
import Cookie from 'js-cookie';

/**Syled Components**/
import {
    TITLE__h2,
} from './styles.js'

export const ViewChat = () => {
    //const { setIdExchange } = props;
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
            console.log(responseJson.result);
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
                    dataExchange.info.length ?
                    dataExchange.info.map((value, index) => {
                        return(
                            <Card value={value} key={index}/>
                        );
                    })
                    :<TITLE__h2 className='TitleEmpty'>No tienes chats pendientes...</TITLE__h2>
                }
            </div>
        </>
    );
}