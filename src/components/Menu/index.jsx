import Link from 'next/link';

/*Syled Components */
import { CONTAINER__nav } from './styles';

export const Menu = () => {
    return (
        <>
            <CONTAINER__nav>
                <Link href="/login"><a>L</a></Link>
                <Link href="/home"><a>H</a></Link>
                <Link href="/profile"><a>P</a></Link>
                <Link href="/newBook"><a>NB</a></Link>
                <Link href="/communities"><a>C</a></Link>
                <Link href="/events"><a>E</a></Link>
            </CONTAINER__nav>
        </>
    )
}