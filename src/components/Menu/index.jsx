import Link from 'next/link';
import { HomeIcon } from '../../assets/HomeIcon';
import { ProfileIcon } from '../../assets/ProfileIcon';
import { AddIcon } from '../../assets/AddIcon';
import { CommunityIcon } from '../../assets/CommunityIcon';
import { EventIcon } from '../../assets/EventsIcon';

/*Syled Components */
import { CONTAINER__nav } from './styles';

export const Menu = () => {
    return (
        <>
            <CONTAINER__nav>
                <Link href="/home"><a><HomeIcon fill="transparent"/></a></Link>
                <Link href="/profile"><a><ProfileIcon fill="transparent"/></a></Link>
                <Link href="/newBook"><a><AddIcon fill="transparent"/></a></Link>
                <Link href="/communities"><a><CommunityIcon fill="transparent"/></a></Link>
                <Link href="/events"><a><EventIcon fill="transparent"/></a></Link>
            </CONTAINER__nav>
        </>
    )
}