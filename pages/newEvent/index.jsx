import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';
import { Forms } from '../../src/components/forms/forms.js';

export default function NewEvent() {
    return (
        <>
            <Header />
            <Forms type="event" />
            <Menu />
        </>
    )
}