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
    const [dataExch, setDataEch] = useState({});
    useEffect(()=>{
        const getExchange = async () => {
            if (paramsRouter) {
                try {
                    console.log(paramsRouter);
                    const response = await fetch(`http://localhost:3001/Exchange/${paramsRouter}`,{
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + Cookies.get('JWT'),
                        },
                        method: 'GET'
                    });
                    const responseJson = await response.json();
                    setDataEch(responseJson.result[0].Id_User_One[0]);
                } catch (error) {
                    console.error(error);
                }
            }
        } 
        getExchange();
    },[paramsRouter])

    return (
        <>
        {console.log(dataExch)}
            <Head><title>Reseña</title></Head>
            <Header />
            <Menu />
            {
                dataExch ?
                <div>
                    <HeaderProfile 
                        photoUser={dataExch.photo}
                        nameUser={dataExch.name}
                        />
                    <ReviewForm exchange = {paramsRouter}/>
                </div>
                :<p>Cargando...</p>
            }
            <Footer />
        </>
    )
}