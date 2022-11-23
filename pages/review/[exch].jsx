import Head from 'next/head';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { Header } from '../../src/components/Header';
import { Menu } from '../../src/components/Menu';
import { HeaderProfile } from '../../src/components/HeaderProfile';
import { ReviewForm } from '../../src/components/ReviewForm';
import { Footer } from "../../src/components/Footer"


export default function Review() {
    const paramsRouter = useRouter().query.exch;
    const [dataExch, setDataExch] = useState({});
    useEffect(()=>{
        const getExchange = async () => {
            if (paramsRouter) {
                try {
                    // console.log(paramsRouter);
                    const response = await fetch(`http://localhost:3001/Exchange/${paramsRouter}`,{
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + Cookies.get('JWT'),
                        },
                        method: 'GET'
                    });
                    const responseJson = await response.json();
                    setDataExch({data:responseJson.result.Exchange[0], myId: responseJson.result.myId});
                    // console.log({data:responseJson.result.Exchange[0], myId: responseJson.result.myId})
                } catch (error) {
                    console.error(error);
                }
            }
        } 
        getExchange();
    },[paramsRouter])

    return (
        <>
            <Head><title>Reseña</title></Head>
            <Header />
            <Menu />
            {
                dataExch.data ?
                <div>
                    <HeaderProfile 
                        photoUser={dataExch.myId === dataExch.data.Id_User_One[0]._id ? 
                            dataExch.data.Id_User_Two[0].photo
                            :dataExch.data.Id_User_One[0].photo}
                        nameUser={dataExch.myId === dataExch.data.Id_User_One[0]._id ? 
                            dataExch.data.Id_User_Two[0].name
                            :dataExch.data.Id_User_One[0].name}
                        />
                    <ReviewForm exchange = {paramsRouter}/>
                </div>
                :<p>Cargando...</p>
            }
            <Footer />
        </>
    )
}