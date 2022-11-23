import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { ViewChat } from '../../src/components/ViewChats/view.js';
import { Footer } from '../../src/components/Footer';

import { useState } from "react"

import Head from 'next/head';

export default function Chats() {
    const [contentInput, setContentInput] = useState("");

    return (
        <>
            <Head> <title>Chats</title> </Head>
            <Header />
            <SearchBar contentInput={contentInput} setContentInput={setContentInput} placeHolder="Buscar chat..." />
            <ViewChat dataFilter = {contentInput} />
            <Menu />
            <Footer />
        </>
    )
}