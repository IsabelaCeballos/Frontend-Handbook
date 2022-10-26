import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Forms } from '../../src/components/forms/forms.js';

export default function NewBook() {
    return (
        <>
            <Header />
            <Forms type="book" />
            <Menu />
        </>
    )
}