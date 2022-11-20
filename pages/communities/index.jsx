import { useState } from "react"

/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Social } from '../../src/components/social/social';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { RECT__button } from '../../src/components/Buttons/index.jsx'
import Head from 'next/head';

/*Syled Components */
import { CONTENTBUTTON__div } from './estilos.js';

export default function Communities() {
    const [contentInput, setContentInput] = useState("");

    return (
        <>
            <Head> <title>Comunidades</title> </Head>
            <Header />
            <SearchBar contentInput={contentInput} setContentInput={setContentInput} placeHolder="Buscar comunidad..." />
            <CONTENTBUTTON__div>
                <a href='/newCommunity'>
                    <RECT__button fillColorBtn="Rojo" width="12rem">Crear comunidad</RECT__button>
                </a>
            </CONTENTBUTTON__div>
            <Social dataFilter = {contentInput}  type="community" />
            <Menu />
            <Footer />

        </>
    )
}