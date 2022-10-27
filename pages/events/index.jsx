/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';

export default function Events() {
    return (
        <>
            <Header />
            <SearchBar placeHolder="Buscar evento..." />
            <Menu />
            <p>Hola desde eventos</p>
            <Footer />
        </>
    )
}