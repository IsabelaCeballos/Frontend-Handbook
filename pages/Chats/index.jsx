/Components/
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { ViewChat } from '../../src/components/ViewChats/view.js';
import { Footer } from '../../src/components/Footer';

import Head from 'next/head';

export default function Chats() {
    return (
        <>
            <Head> <title>Chats</title> </Head>
            <Header />
            <SearchBar placeHolder="Buscar conversación..." />
            <ViewChat />
            <Menu />
            <Footer />
        </>
    )
}