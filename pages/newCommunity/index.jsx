/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Forms } from '../../src/components/forms/forms.js';
import { Footer } from '../../src/components/Footer';
import Head from 'next/head';

export default function NewCommunity() {
    return (
        <>
            <Head> <title>Nueva comunidad</title> </Head>
            <Header />
            <Forms type="community" />
            <Menu />
            <Footer />
        </>
    )
}