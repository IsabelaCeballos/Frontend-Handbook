/*Components */
import { Menu } from '../../src/components/Menu';
import { SearchBar } from '../../src/components/SearchBar';
import { Header } from '../../src/components/Header';
import { SelectBook } from '../../src/components/SelectBook';
import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';


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
        "book": [
            {
                "_id":"63792c6c9fd26480f09bd779",
                "name":"Cosas que perdimos en el fuego",
                "author":"Mariana Enríquez",
                "pages":"200",
                "description":"Las cosas que perdimos en el fuego es la segunda colección de cuentos de la escritora argentina Mariana Enríquez, publicada en 2016 por la editorial Anagrama.",
                "photo":"https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1612309224l/28787166._SY475_.jpg",
                "state":"Disponible",
                "Id_Owner":"635b02904ad905d13b414a4b"
            }
        ],
        "user": {
            "_id": "635b02904ad905d13b414a4b",
            "id":"106767784775993414214",
            "name":"Daniela Jurado Blandon",
            "email":"daniela_jurado82191@elpoli.edu.co",
            "photo":"https://lh3.googleusercontent.com/a/ALm5wu0q-Uyd_GbeQqvaOz-89IoIsYmuJn8jQY9raOmaqA=s96-c"
        }
    }

    const [dataBook, setDataBook] = useState(null);

    useLayoutEffect(() => {
        Cookies.get('JWT') === undefined ? router.push('/login') : null;
    }, []);

    useEffect(() => { 
        const getEntryRandomBook = async () => {
            const response = await fetch('http://localhost:3001/bibliographic_materials_random', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookies.get('JWT'),
                }
            });
            const data = await response.json();
            console.log(data);
            setDataBook(data.result);
        }
        getEntryRandomBook();
    },[]);

    return (
        <>
            <CONTAINER__div>
                <Head> <title>Inicio</title> </Head>
                <Header />
                {
                    dataBook ? 
                    <SelectBook DATA={dataBook} setDataBook = {setDataBook} />
                    : <p>Cargando...</p>
                }
                <Footer />
            </CONTAINER__div>
            <Menu />
        </>
    )
}