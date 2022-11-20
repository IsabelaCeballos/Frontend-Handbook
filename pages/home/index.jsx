/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { SelectBook } from '../../src/components/SelectBook';
import Head from 'next/head';

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import useLayoutEffect from './use-isomorphic-layout-effect';
import { Footer } from '../../src/components/Footer';

import Styled from 'styled-components';

const CONTAINER__div = Styled.div`
    height: 100vh;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 6fr 1fr;
    justify-items: center;
`

export default function Home() {

    const router = useRouter();

    const DEFAULT_DATA = {
        nameUser: "Sarah Catharine Paulson",
        imgUserUrl: "https://ungarnheute.hu/wp-content/uploads/2022/01/243491282_410788743736865_9129347929888835316_n.jpg",
        starsProm: 5,
        titleBook: "Persuasión",
        imgBookUrl: "https://sramirech.files.wordpress.com/2020/02/portada-1-persuasion.jpg"
    }

    useLayoutEffect(() => {
        Cookies.get('JWT') === undefined ? router.push('/login') : null;
    }, []);

    return (
        <>
            <CONTAINER__div>
                <Head> <title>Inicio</title> </Head>
                <Header />
                <SelectBook DATA={DEFAULT_DATA} />
                <Footer />
            </CONTAINER__div>
            <Menu />
        </>
    )
}