/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Footer } from '../../src/components/Footer';
import { HeaderProfile } from '../../src/components/HeaderProfile';
import { OptionsSection } from '../../src/components/OptionsSection';

export default function Profile() {
    return (
        <>
            <Header />
            <HeaderProfile/>
            <OptionsSection />
            <Menu />
            <Footer />
        </>
    )
}