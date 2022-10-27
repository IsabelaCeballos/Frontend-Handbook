import Link from 'next/link';
import { useRouter } from 'next/router'

/*Assets */
import { HomeIcon } from '../../assets/HomeIcon';
import { ProfileIcon } from '../../assets/ProfileIcon';
import { AddIcon } from '../../assets/AddIcon';
import { CommunityIcon } from '../../assets/CommunityIcon';
import { EventIcon } from '../../assets/EventsIcon';

/*Syled Components */
import { CONTAINER__nav } from './styles';

export const Menu = () => {
    const params = useRouter().route;
    return (
        <>
            <CONTAINER__nav>
                <Link href="/home"><a><HomeIcon fill={params == "/home" ?"#EAB686":"transparent"}/></a></Link>
                <Link href="/profile"><a><ProfileIcon fill={params == "/profile" ?"#EAB686":"transparent"}/></a></Link>
                <Link href="/newBook"><a><AddIcon fill={params == "/newBook" ?"#EAB686":"transparent"}/></a></Link>
                <Link href="/communities"><a><CommunityIcon fill={params == "/communities" ?"#EAB686":"transparent"}/></a></Link>
                <Link href="/events"><a><EventIcon fill={params == "/events" ?"#EAB686":"transparent"}/></a></Link>
            </CONTAINER__nav>
        </>
    )
}