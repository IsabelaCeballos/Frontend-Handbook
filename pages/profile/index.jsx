import Cookie from 'js-cookie';
import { useEffect, useState } from "react";

/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { HeaderProfile } from '../../src/components/HeaderProfile';
import { OptionsSection } from '../../src/components/OptionsSection';
import Head from 'next/head';

export default function Profile() {
    const [dataUser, setDataUser] = useState({});

    useEffect(() => { 
        const getUserDataProfile = async () => {
            const response = await fetch('http://localhost:3001/profile', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
                }
            });
            const data = await response.json();
            setDataUser(data.result);
        }
        getUserDataProfile();
    },[]);
    return (
        <>
            <Head> <title>Perfil</title> </Head>
            <Header />
            <HeaderProfile photoUser={dataUser.photo} nameUser={dataUser.name}/>
            <OptionsSection />
            <Menu />
            <Footer />
        </>
    )
}