import { useState } from "react"

/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Social } from '../../src/components/social/social.js';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { RECT__button } from '../../src/components/Buttons/index.jsx'
import Head from 'next/head';

/*Syled Components */
import { CONTENTBUTTON__div } from './estilos.js';

export default function Events() {
    const [contentInput, setContentInput] = useState("");

    return (
        <>
            {console.log(contentInput)}

            <Head> <title>Eventos</title> </Head>
            <Header />
            <SearchBar contentInput={contentInput} setContentInput={setContentInput} placeHolder="Buscar evento..." />
            <CONTENTBUTTON__div>
                <a href='/newEvent'>
                    <RECT__button fillColorBtn="Verde" width="12rem">Crear evento</RECT__button>
                </a>
            </CONTENTBUTTON__div>
            <Social dataFilter = {contentInput} type="event" />
            <Menu />
            <Footer />
        </>
    )
}