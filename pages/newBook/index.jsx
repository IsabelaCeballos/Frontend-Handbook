/*Components */
import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Forms } from '../../src/components/forms/forms.js';
import { Footer } from '../../src/components/Footer';

export default function NewBook() {
    return (
        <>
            <Header />
            <Forms type="book" />
            <Menu />
            <Footer />
        </>
    )
}