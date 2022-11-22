import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router'
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
    DETAILS__p,
    HEADER_DATA__div,
    CONTAINER_BTN__div
} from './styles';

export const PreviewElements = ({
    choose,
    chooseSecondary,
    dataBook, setDataBook,
    myCommunities, setMyCommunities,
    communities, setCommunities,
    myEvents, setMyEvents,
    events, setEvents,
    getMyDataBooks
}) => {

    const Router = useRouter();
    // console.log(communities)

    useEffect(() => {
        getMyDataBooks();
    }, []);

    const deleteBookRequest = async (id) => {
        const response = await fetch(`http://localhost:3001/bibliographic_material/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            },
            method: 'DELETE'
        });
        const data = await response.json();
        // console.log(data);
    }

    const deleteCommunityRequest = async (id) => {
        const response = await fetch(`http://localhost:3001/community/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            },
            method: 'DELETE'
        });
        const data = await response.json();
        // console.log(data);
    }
    const deleteEventRequest = async (id) => {
        const response = await fetch(`http://localhost:3001/event/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            },
            method: 'DELETE'
        });
        const data = await response.json();
        // console.log(data);
    }

    const deleteBtnAction = (id, element) => {
        Swal.fire({
            title: '!Cuidado!',
            text: "Estas a punto de eliminar este elemento ¿De verdad quieres hacerlo?",
            icon: 'warning',
            iconColor: "#75C0AA",
            showCancelButton: true,
            confirmButtonColor: '#75C0AA',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (element === "book") {
                    deleteBookRequest(id);
                    let books = [];
                    dataBook.map((elem) => { elem._id !== id ? books.push(elem) : null });
                    setDataBook(books);

                } else if (element === "community") {
                    deleteCommunityRequest(id);
                    let communities = [];
                    myCommunities.map((elem) => { elem._id !== id ? communities.push(elem) : null });
                    setMyCommunities(communities);
                } else {
                    deleteEventRequest(id);
                    let events = [];
                    myEvents.map((elem) => { elem._id !== id ? events.push(elem) : null });
                    setMyEvents(events);
                }
                Swal.fire(
                    {
                        title: '¡Eliminado!',
                        text: "Tu elemento ha sido eliminado con exito'",
                        icon: 'success',
                        iconColor: "#75C0AA",
                        showCancelButton: false,
                        confirmButtonColor: '#75C0AA',
                    }
                )
            }
        })
    }

    const exitEventRequest = async (id) => {
        const response = await fetch(`http://localhost:3001/remove_participant/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            },
            method: 'DELETE'
        });
        const data = await response.json();
        // console.log(data);
    }
    const exitCommunityRequest = async (id) => {
        const response = await fetch(`http://localhost:3001/remove_member/${id}`, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
            },
            method: 'DELETE'
        });
        const data = await response.json();
        // console.log(data);
    }
    const exitBtnAction = (id, element) => {
        Swal.fire({
            title: '!Cuidado!',
            text: `Estas a punto de salirte de ${element === "event" ? "este evento" : "esta comunidad"} ¿De verdad quieres hacerlo?`,
            icon: 'warning',
            iconColor: "#75C0AA",
            showCancelButton: true,
            confirmButtonColor: '#75C0AA',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Salir',
            cancelButtonText: "Cancelar"
        }).then(async (result) => {
            if (result.isConfirmed) {
                if (element === "community") {
                    // console.log("jiji aun no")
                    exitCommunityRequest(id);
                    let communitiesArray = [];
                    communities.map((elem) => { elem._id !== id ? communitiesArray.push(elem) : null });
                    setCommunities(communitiesArray);
                } else {
                    exitEventRequest(id);
                    let eventsArray = [];
                    events.map((elem) => { elem._id !== id ? eventsArray.push(elem) : null });
                    setEvents(eventsArray);
                }
                Swal.fire(
                    {
                        title: '¡Saliste!',
                        text: `Ahora ya no haces parte de ${element === "community" ? "esta comunidad" : "este evento"}`,
                        icon: 'success',
                        iconColor: "#75C0AA",
                        showCancelButton: false,
                        confirmButtonColor: '#75C0AA',
                    }
                )
            }
        })
    }

    const editBtnAction = (id, element) => {
        Router.push(`/edit/${id}_${element}`);
    }


    return (
        <CONTAINER_BOOK__section>
            {
                choose === "books" ?
                    chooseSecondary === 0 ?
                        dataBook ?
                            dataBook.map((book, ind) => (
                                book.state === "Disponible" &&
                                <TEMPLATE_IMG_BOOK__div key={ind} state = {book.state}>
                                    <img src={book.photo} alt={`Image book ${book.name}`} />
                                    <div>
                                        <CIRC__button fillColorBtn="Pancho" onClick={() => deleteBtnAction(book._id, "book")}>
                                            <DeleteIcon />
                                        </CIRC__button>
                                        <CIRC__button fillColorBtn="Rojo" onClick={() => editBtnAction(book._id, "book")}>
                                            <EditIcon />
                                        </CIRC__button>
                                    </div>
                                </TEMPLATE_IMG_BOOK__div>
                            ))
                            : <p>Cargando...</p>
                        : chooseSecondary === 1 ?
                            dataBook ?
                                dataBook.map((book, ind) => (
                                    (book.state === "En proceso" || book.state === "Intercambiado") &&
                                    <TEMPLATE_IMG_BOOK__div key={ind} state = {book.state}>
                                        <img src={book.photo} alt={`Image book ${book.name}`} />
                                        <p>{book.state === "Intercambiado" ? "Intercambiado":"En proceso"}</p>
                                    </TEMPLATE_IMG_BOOK__div>
                                ))
                                : <p>Cargando...</p>
                            : <p>No encontramos lo que quieres ver</p>
                    : choose === "communities" ?
                        chooseSecondary === 0 ?
                            myCommunities ?
                                myCommunities.map((community, ind) => (
                                    <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                                        <HEADER_DATA__div>
                                            <span>{community.icon}</span>
                                            <p>{community.name}</p>
                                            <DETAILS__p>Miembros: {community.members + 1}</DETAILS__p>
                                        </HEADER_DATA__div>
                                        <CONTAINER_BTN__div>
                                            <CIRC__button fillColorBtn="Pancho" onClick={() => deleteBtnAction(community._id, "community")}>
                                                <DeleteIcon />
                                            </CIRC__button>
                                            <CIRC__button fillColorBtn="Rojo" onClick={() => editBtnAction(community._id, "community")}>
                                                <EditIcon />
                                            </CIRC__button>
                                        </CONTAINER_BTN__div>
                                    </TEMPLATE_COMMUNITY_EVENT__div>
                                ))
                                : <p>Cargando...</p>
                            : chooseSecondary === 1 ?
                                communities ?
                                    communities.map((community, ind) => (
                                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                                            <HEADER_DATA__div>
                                                <span>{community.icon}</span>
                                                <p>{community.name}</p>
                                                <DETAILS__p>Miembros: {community.members + 1}</DETAILS__p>
                                            </HEADER_DATA__div>
                                            <CONTAINER_BTN__div>
                                                <RECT__button fillColorBtn="Rojo" onClick={() => exitBtnAction(community._id, "community")}>
                                                    Salir
                                                </RECT__button>
                                            </CONTAINER_BTN__div>
                                        </TEMPLATE_COMMUNITY_EVENT__div>
                                    ))
                                    : <p>Cargando...</p>
                                : <p>No encontramos lo que quieres ver</p>
                        : choose === "events" ?
                            chooseSecondary === 0 ?
                                myEvents ?
                                    myEvents.map((event, ind) => (
                                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                                            <HEADER_DATA__div>
                                                <span>{event.icon}</span>
                                                <p>{event.name}</p>
                                                <DETAILS__p>{event.date}</DETAILS__p>
                                            </HEADER_DATA__div>
                                            <CONTAINER_BTN__div>
                                                <CIRC__button fillColorBtn="Pancho" onClick={() => deleteBtnAction(event._id, "event")}>
                                                    <DeleteIcon />
                                                </CIRC__button>
                                                <CIRC__button fillColorBtn="Rojo" onClick={() => editBtnAction(event._id, "event")}>
                                                    <EditIcon />
                                                </CIRC__button>
                                            </CONTAINER_BTN__div>
                                        </TEMPLATE_COMMUNITY_EVENT__div>
                                    ))
                                    : <p>Cargando...</p>
                                : chooseSecondary === 1 ?
                                    events ?
                                        events.map((event, ind) => (
                                            <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                                                <HEADER_DATA__div>
                                                    <span>{event.icon}</span>
                                                    <p>{event.name}</p>
                                                    <DETAILS__p>{event.date}</DETAILS__p>
                                                </HEADER_DATA__div>
                                                <CONTAINER_BTN__div>
                                                    <RECT__button fillColorBtn="Rojo" onClick={() => exitBtnAction(event._id, "event")}>
                                                        Salir
                                                    </RECT__button>
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