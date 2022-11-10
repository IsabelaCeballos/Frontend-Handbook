/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { HeaderProfile } from '../../src/components/HeaderProfile';
import { OptionsSection } from '../../src/components/OptionsSection';
import Head from 'next/head';

export default function Profile() {
    return (
        <>
            <Head> <title>Perfil</title> </Head>
            <Header />
            <HeaderProfile/>
            <OptionsSection />
            <Menu />
            <Footer />
        </>
    )
}