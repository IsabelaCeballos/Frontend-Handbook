/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { ViewChat } from '../../src/components/ViewChats/view.js';
import { Footer } from '../../src/components/Footer';

import { useRouter } from 'next/router'

import Head from 'next/head';

export default function Chats() {
    let dataUser = {name: "daniela jruado", urlImg: "https:/ejemplo.com"}
    return (
        <>
            <Head> <title>Chats</title> </Head>
            <Header />
            <SearchBar placeHolder="Buscar conversación..." />
            {/* <button onClick={()=> Router.push(`/chats/${"esto es el id del mensaje"}_${dataUser}`) }>Ir al chat</button> */}
            <ViewChat />
            <Menu />
            <Footer />
        </>
    )
}