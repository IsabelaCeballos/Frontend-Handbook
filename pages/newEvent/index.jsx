/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Forms } from '../../src/components/forms/forms.js';
import { Footer } from '../../src/components/Footer';
import Head from 'next/head';

export default function NewEvent() {
    return (
        <>
            <Head> <title>Nuevo evento</title> </Head>
            <Header />
            <Forms type="event" />
            <Menu />
            <Footer />
        </>
    )
}