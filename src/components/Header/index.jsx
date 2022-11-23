import Link from 'next/link';

/*Syled Components */
import { CONTAINER__header, NAME_APP__h1 } from "./styles"

/*Assets */
import { MessagesIcon } from "../../assets/messages"
import { useRouter } from 'next/router';

export const Header = () => {
    const paramsRouter = useRouter().route;
    return (
        <>
            <CONTAINER__header>
                <NAME_APP__h1>HandBook</NAME_APP__h1>
                <Link href="/chats">
                    <a ><MessagesIcon fill={paramsRouter==="/chats"?"#EAB686":"#FFFFFF"} visibility={"visible"} width="2rem" height="2rem" /></a>
                </Link>
            </CONTAINER__header>
        </>
    )
}