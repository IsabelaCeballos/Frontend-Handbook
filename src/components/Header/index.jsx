import Link from 'next/link';

/*Syled Components */
import { CONTAINER__header, NAME_APP__h1 } from "./styles"

/*Assets */
import { MessagesIcon } from "../../assets/messages"

export const Header = () => {
    return (
        <>
            <CONTAINER__header>
                <NAME_APP__h1>HandBook</NAME_APP__h1>
                <Link href="/login">
                    <a ><MessagesIcon visibility={"visible"} width="2rem" height="2rem" /></a>
                </Link>
            </CONTAINER__header>
        </>
    )
}