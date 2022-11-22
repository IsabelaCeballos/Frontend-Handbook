import Cookies from 'js-cookie';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

import {AirplaneIcon} from "../../src/assets/Airplane";
// import imgFill from "../../src/assets/Fondo.png";
import {CIRC__button} from '../../src/components/Buttons';


import {
    BAR_DES__section, BAR_DES__div, BAR_TYPING__section, 
    CONTAINER_MSJ__div, BTNS__div, MSJ__div, BAR_TYPING__div
} from './styles';

export default function Chatting() {
    const paramsRouter = useRouter().query.chat;
    const [msj,setMsj] = useState("");

    const bookExchange = async () => {
        // const response = await fetch(`http://localhost:3001/Exchange/{id}`, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json',
        //         'Authorization': 'Bearer ' + Cookies.get('JWT'),
        //     },
        //     method: "DELETE"
        // });
        // const data = await response.json();
        console.log("intercambio finalizado");
    }
    const bookNotExchange = async () => {
        console.log("intercambio cancelado");
    }
    return (
        <>
            <Head> <title>Chating</title> </Head>
            <BAR_DES__div>
                <BAR_DES__section>
                    <img src='https://media.istockphoto.com/id/1127302688/es/vector/icono-de-pato-amarillo.jpg?s=612x612&w=0&k=20&c=qbHH2q0eR_8H_XFFAn-NJi5WINYtcN2OrruQ1KCG0W4=' alt='Imagen usuario destinatario' />
                    <p>{"El patito de lilo"}</p>
                    <BTNS__div>
                        <button onClick={()=>bookExchange()} >Libro recibido</button>
                        <button onClick={()=>bookNotExchange()}>No intercambiar</button>
                    </BTNS__div>
                </BAR_DES__section>
            </BAR_DES__div>
            <CONTAINER_MSJ__div>
                <MSJ__div who="you">
                    <p>
                        ¡Hello my friend! Welcome to American School Way. 
                        Estamos aquí para enamorarte del inglés. ¿Cuéntanos cuándo quieres comenzar?
                    </p>
                    <span>8:08 p.m.</span>
                </MSJ__div>
                <MSJ__div who="me">
                    <p>
                        ¿Sigues interesado en comenzar a dominar el inglés con nosotros?
                        Sabemos que necesitas tiempo para pensarlo, pero queremos que lo
                        hagas sabiendo que tendrás un beneficio adicional para que retomes
                        tu sueño de aprender inglés. Responde a este mensaje con un Hello, I'm Ready.
                    </p>
                    <span>9:28 p.m.</span>
                </MSJ__div>
                <MSJ__div who="you">
                    <p>
                        ¡Hello my friend! Welcome to American School Way. 
                        Estamos aquí para enamorarte del inglés. ¿Cuéntanos cuándo quieres comenzar?
                    </p>
                    <span>8:08 p.m.</span>
                </MSJ__div>
                <MSJ__div who="you">
                    <p>
                        ¡Hello my friend! Welcome to American School Way. 
                        Estamos aquí para enamorarte del inglés. ¿Cuéntanos cuándo quieres comenzar?
                    </p>
                    <span>8:08 p.m.</span>
                </MSJ__div>
            </CONTAINER_MSJ__div>
            <BAR_TYPING__div>
                <BAR_TYPING__section>
                    <textarea onChange={(e)=>setMsj(e.target.value)} rows="1" placeholder='Escribe tu mensaje aquí...' />
                    <CIRC__button fillColorBtn="#488674" onClick = {() => console.log(msj)}>
                        <AirplaneIcon />
                    </CIRC__button>
                </BAR_TYPING__section>
            </BAR_TYPING__div>
        </>
    )
}