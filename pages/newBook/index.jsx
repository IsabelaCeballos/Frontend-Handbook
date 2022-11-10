/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Forms } from '../../src/components/forms/forms.js';
import { Footer } from '../../src/components/Footer';
import Head from 'next/head'

export default function NewBook() {
    return (
        <>
            <Head> <title>Nuevo libro</title> </Head>
            <Header />
            <Forms type="book" />
            <Menu />
            <Footer />
        </>
    )
}