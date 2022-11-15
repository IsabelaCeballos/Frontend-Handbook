import { Card } from './card.js';

/*Syled Components */
import {
    PRINCIPAL__div,
    TITLE__h2,
    CONTENTP__div,
    CONTENTIMAGE__div,
    CONTENTA__a
} from './styles.js'

export const ViewChat = () => {

    const DATA_CHATS = [
        {
            image: "https://uploads.vibra.co/1/2022/08/fotos-de-perfil-aesthetic.jpg",
            nameFriend: "Annette Black",
            BookOne: "Título libro 1",
            BookTwo: "Título libro 2",
        },
        {
            image: "https://uploads.vibra.co/1/2022/08/fotos-de-perfil-aesthetic.jpg",
            nameFriend: "Ronald Richards",
            BookOne: "Título libro 1",
            BookTwo: "Título libro 2",
        },
        {
            image: "https://uploads.vibra.co/1/2022/08/fotos-de-perfil-aesthetic.jpg",
            nameFriend: "Isaac Newton",
            BookOne: "Título libro 1",
            BookTwo: "Título libro 2",
        },
    ]

    return(
        <>
            <div>
                {
                    DATA_CHATS.length ?
                    DATA_CHATS.map((value, index) => {
                        return(
                            <Card value={value} key={index}/>
                        );    
                    })
                    :<TITLE__h2 className='TitleEmpty'>!No tienes chats pendientes¡</TITLE__h2>
                }
            </div>
        </>
    );
}