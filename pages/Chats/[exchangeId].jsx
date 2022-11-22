import Cookie from 'js-cookie';
import io from 'socket.io-client';

import Head from 'next/head';
import Router, { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import { AirplaneIcon } from "../../src/assets/Airplane";
import { BackIcon } from "../../src/assets/backIcon";
import { CIRC__button } from '../../src/components/Buttons';


import {
    BAR_DES__section, BAR_DES__div, BAR_TYPING__section,
    CONTAINER_MSJ__div, BTNS__div, MSJ__div, BAR_TYPING__div
} from './styles';

export default function Chatting() {
    const [message, setMessage] = useState();
    const [socket, setSocket] = useState();
    const [vecMsj, setVecMsj] = useState();
    const [userChat, setUserChat] = useState("");

    const paramsRouter = useRouter().query.exchangeId;

    useEffect(() => {

        if (paramsRouter) {
            const paramsRouterExch = paramsRouter.split("_")[0];
            let Socket = io('http://localhost:3001', {
                query: {
                    token: Cookie.get('JWT'),
                    exchange: paramsRouterExch
                }
            });

            setSocket(Socket);

            Socket.emit('getMessage');

            Socket.on('messages', data => { setVecMsj(data); })

            getUserChat(paramsRouterExch);
        }
    }, [paramsRouter]);

    const getUserChat = async (paramsRouterExch) => {
        const response = await fetch(`http://localhost:3001/Exchange/${paramsRouterExch}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            },
            method: 'GET'
        });
        const data = await response.json();
        setUserChat(data.result);
        console.log(data);
    }

    const handlerSendMessage = () => {
        socket.emit('sendMessage', message, paramsRouter.split("_")[0]);
        setMessage("");
    }

    const bookNotExchange = async () => {
        console.log("Cancelar exchange");
        // try {
        //     const response = await fetch(`http://localhost:3001/Exchange/${paramsRouter.split("_")[0]}`,{
        //         headers: {
        //             'Accept': 'application/json',
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer ' + Cookies.get('JWT'),
        //         },
        //         method: 'DELETE'
        //     });
        //     const responseJson = await response.json();
        // } catch (error) {
        //     console.error(error);
        // }
        Router.push("/chats")
    }
    return (
        <>
            <Head> <title>Chating</title> </Head>
            <>
                {
                    userChat ?
                        <div>
                            <BAR_DES__div>
                                <button onClick={() => Router.push("/chats")}><BackIcon /></button>
                                <BAR_DES__section>
                                    <img src={
                                        userChat.Exchange[0].Id_User_One[0]._id === paramsRouter.split("_")[1] ?
                                            userChat.Exchange[0].Id_User_Two[0].photo
                                            : userChat.Exchange[0].Id_User_One[0].photo
                                    }
                                        alt='Imagen usuario destinatario'
                                    />
                                    <p>{
                                        userChat.Exchange[0].Id_User_One[0]._id === paramsRouter.split("_")[1] ?
                                            userChat.Exchange[0].Id_User_Two[0].name
                                            : userChat.Exchange[0].Id_User_One[0].name
                                    }</p>
                                    <BTNS__div>
                                        <button onClick={() => Router.push(`../review/${userChat.Exchange[0]._id}`)} >Libro recibido</button>
                                        <button onClick={() => bookNotExchange()}>No intercambiar</button>
                                    </BTNS__div>
                                </BAR_DES__section>
                            </BAR_DES__div>
                            <CONTAINER_MSJ__div>
                                {
                                    vecMsj ?
                                        vecMsj.map((msj, index) => (
                                            <MSJ__div key={index} who={`${paramsRouter.split("_")[1] === msj.id_user_destiny[0]._id ? "you" : "me"}`}>
                                                <p>
                                                    {msj.content}
                                                </p>
                                                <span>{msj.date}</span>
                                            </MSJ__div>
                                        ))
                                        : null
                                }
                            </CONTAINER_MSJ__div>
                            <BAR_TYPING__div>
                                <BAR_TYPING__section>
                                    <textarea value={message} onChange={(e) => setMessage(e.target.value)} rows="1" placeholder='Escribe tu mensaje aquí...' />
                                    <CIRC__button fillColorBtn="#488674" onClick={() => handlerSendMessage()}>
                                        <AirplaneIcon />
                                    </CIRC__button>
                                </BAR_TYPING__section>
                            </BAR_TYPING__div>
                        </div>
                        : <p>Cargando...</p>
                }
            </>
        </>
    )
}