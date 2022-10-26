import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { SelectBook } from '../../src/components/SelectBook';


export default function Home() {
    const DEFAULT_DATA = {
        nameUser: "Sarah Catharine Paulson",
        imgUserUrl: "https://ungarnheute.hu/wp-content/uploads/2022/01/243491282_410788743736865_9129347929888835316_n.jpg",
        starsProm: 5,
        titleBook: "Persuasión",
        imgBookUrl: "https://sramirech.files.wordpress.com/2020/02/portada-1-persuasion.jpg"
    }
    return (
        <>
            <Header />
            <SearchBar placeHolder="Quiero leer..."/>
            <SelectBook DATA={DEFAULT_DATA} />
            <Menu />
        </>
    )
}