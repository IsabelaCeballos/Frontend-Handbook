/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Social } from '../../src/components/social/social';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { RECT__button } from '../../src/components/Buttons/index.jsx'

/*Syled Components */
import { CONTENTBUTTON__div } from './estilos.js';

export default function Communities() {
    return (
        <>
            <Header />
            <SearchBar placeHolder="Buscar comunidad..." />
            <CONTENTBUTTON__div>
                <RECT__button fillColorBtn="Rojo" width="12rem">Crear comunidad</RECT__button>
            </CONTENTBUTTON__div>
            <Social type="community" />
            <Menu />
            <Footer />

        </>
    )
}