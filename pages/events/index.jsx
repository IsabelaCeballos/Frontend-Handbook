import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';

export default function Events() {
    return (
        <>
            <Header />
            <SearchBar placeHolder="Buscar evento..." />
            <Menu />
            <p>Hola desde eventos</p>
        </>
    )
}