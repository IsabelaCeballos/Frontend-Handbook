/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';

export default function Communities() {
    return (
        <>  
            <Header />
            <SearchBar placeHolder="Buscar comunidad..."/>
            <Menu />
            <p>Hola desde comunidades</p>
            <Footer />

        </>
    )
}