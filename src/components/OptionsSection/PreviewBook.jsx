import { useEffect } from "react";
/*Components */
import { RECT__button, CIRC__button } from '../Buttons';

/*Assets */
import { EditIcon } from '../../assets/Edit';
import { DeleteIcon } from '../../assets/Delete';

/*Syled Components */
import {
    CONTAINER_BOOK__section,
    TEMPLATE_IMG_BOOK__div,
    TEMPLATE_COMMUNITY_EVENT__div,
    HEADER_DATA__div,
    CONTAINER_BTN__div
} from './styles';

export const PreviewBook = ({
    choose,
    chooseSecondary,
    dataBook,
    myCommunities,
    communities,
    myEvents,
    events,
    getMyDataBooks
}) => {

    useEffect(() => { 
        getMyDataBooks();
    },[]);

    return (
        <CONTAINER_BOOK__section>
            {
            choose === "books" ?
                chooseSecondary === 0 ?
                    dataBook ?
                    dataBook.map((book, ind)=> (
                        book.state === "Disponible" &&
                        <TEMPLATE_IMG_BOOK__div key={ind}>
                            <img src={book.photo} alt={`Image book ${book.name}`} />
                            <div>
                                <CIRC__button fillColorBtn="Pancho">
                                    <DeleteIcon/>
                                </CIRC__button>
                                <CIRC__button fillColorBtn="Rojo">
                                    <EditIcon/>
                                </CIRC__button>
                            </div>
                        </TEMPLATE_IMG_BOOK__div>
                    ))
                    : <p>Cargando...</p>
                :chooseSecondary === 1 ?
                    dataBook ?
                    dataBook.map((book, ind)=> (
                        book.state === "Intercambiado" &&
                        <TEMPLATE_IMG_BOOK__div key={ind}>
                            <img src={book.photo} alt={`Image book ${book.name}`} />
                        </TEMPLATE_IMG_BOOK__div>
                    ))
                    : <p>Cargando...</p>
                : <p>No encontramos lo que quieres ver</p>
            : choose === "communities" ?
                chooseSecondary === 0 ?
                    myCommunities ?
                    myCommunities.map((community, ind)=> (
                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                            <HEADER_DATA__div>
                                <span>{community.icon}</span>
                                <p>{community.name}</p>
                            </HEADER_DATA__div>
                            <CONTAINER_BTN__div>
                                <CIRC__button fillColorBtn="Pancho">
                                    <DeleteIcon/>
                                </CIRC__button>
                                <CIRC__button fillColorBtn="Rojo">
                                    <EditIcon/>
                                </CIRC__button>
                            </CONTAINER_BTN__div>
                        </TEMPLATE_COMMUNITY_EVENT__div>
                    ))
                    : <p>Cargando...</p>
                :chooseSecondary === 1 ?
                    communities ?
                    communities.map((community, ind)=> (
                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                            <HEADER_DATA__div>
                                <span>{community.icon}</span>
                                <p>{community.name}</p>
                            </HEADER_DATA__div>
                            <CONTAINER_BTN__div>
                                <RECT__button fillColorBtn="Rojo">Salir</RECT__button>
                            </CONTAINER_BTN__div>
                        </TEMPLATE_COMMUNITY_EVENT__div>
                    ))
                    : <p>Cargando...</p>
                : <p>No encontramos lo que quieres ver</p>
            : choose === "events" ? 
                chooseSecondary === 0 ?
                    myEvents ?
                    myEvents.map((event, ind)=> (
                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                            <HEADER_DATA__div>
                                <span>{event.icon}</span>
                                <p>{event.name}</p>
                            </HEADER_DATA__div>
                            <CONTAINER_BTN__div>
                                <CIRC__button fillColorBtn="Pancho">
                                    <DeleteIcon/>
                                </CIRC__button>
                                <CIRC__button fillColorBtn="Rojo">
                                    <EditIcon/>
                                </CIRC__button>
                            </CONTAINER_BTN__div>
                        </TEMPLATE_COMMUNITY_EVENT__div>
                    ))
                    : <p>Cargando...</p>
                :chooseSecondary === 1 ?
                    events ?
                    events.map((event, ind)=> (
                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                            <HEADER_DATA__div>
                                <span>{event.icon}</span>
                                <p>{event.name}</p>
                            </HEADER_DATA__div>
                            <CONTAINER_BTN__div>
                                <RECT__button fillColorBtn="Rojo">Salir</RECT__button>
                            </CONTAINER_BTN__div>
                        </TEMPLATE_COMMUNITY_EVENT__div>
                    ))
                    : <p>Cargando...</p>
                : <p>No encontramos lo que quieres ver</p>
            : <p>No encontramos lo que quieres ver</p>
            }
        </CONTAINER_BOOK__section>
    )
}