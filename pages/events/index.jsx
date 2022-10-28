/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Social } from '../../src/components/social/social.js';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { RECT__button } from '../../src/components/Buttons/index.jsx'

/*Syled Components */
import { CONTENTBUTTON__div } from './estilos.js';

export default function Events() {
    return (
        <>
            <Header />
            <SearchBar placeHolder="Buscar evento..." />
            <CONTENTBUTTON__div>
                <RECT__button fillColorBtn="Verde" width="12rem">Crear evento</RECT__button>
            </CONTENTBUTTON__div>
            <Social type="event" />
            <Menu />
            <Footer />
        </>
    )
}