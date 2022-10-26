import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';

export default function Communities() {
    return (
        <>  
            <Header />
            <SearchBar placeHolder="Buscar comunidad..."/>
            <Menu />
            <p>Hola desde comunidades</p>
        </>
    )
}