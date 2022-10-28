import { useState, useEffect } from "react";

import { Card } from './card.js';

import Cookie from 'js-cookie';

/*Syled Components */
import {
    PRINCIPAL__div,
    TITLE__h2,
    CONTENTP__div,
    CONTENTIMAGE__div,
    CONTENTA__a
} from './styles';

export const Social = (props) => {
    const {type} = props;
    const [dataEvents, setDataEvents] = useState({cards:""});
    const [dataCommunity, setDataCommunity] = useState({info:""});

    useEffect(()=>{
        getDataEvents();
        getDataCommunity();
    },[]);

    const getDataEvents = async () => {
        try {
            const response = await fetch('http://localhost:3001/events',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            console.log(responseJson);
            setDataEvents({
                cards: responseJson.result,
            });
        } catch (error) {
            
        }
    }

    const getDataCommunity = async () => {
        try {
            const response = await fetch('http://localhost:3001/communities',{
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                },
                method: 'GET'
            });
            const responseJson = await response.json();
            console.log(responseJson);
            setDataCommunity({
                info: responseJson.result,
            });
        } catch (error) {
            
        }
    }

    return (
        <PRINCIPAL__div>
            {
                type === "event" ?
                dataEvents.cards.length > 0 ?
                    dataEvents.cards.map((value,index)=>{
                        return( 
                            <Card tipo="event" value={value} key={index}/>
                        );
                    })
                :<TITLE__h2 className='TitleEmpty'>!Lo sentimos, en este momento no hay programación¡</TITLE__h2>
                : type === "community" ?
                dataCommunity.info.length > 0 ?
                    dataCommunity.info.map((value,index)=>{
                        return( 
                            <Card tipo="community" value={value} key={index}/>
                        );
                    })
                :<TITLE__h2 className='TitleEmpty'>!Lo sentimos, en este momento no hay programación¡</TITLE__h2>
                :null
            }
        </PRINCIPAL__div>
    );
}
