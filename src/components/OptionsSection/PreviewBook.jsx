import Cookie from 'js-cookie';
import Swal from 'sweetalert2';
import Router from 'next/router'
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
        console.log(data);
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
        console.log(data);
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
        console.log(data);
    }

    const deleteBtnAction = (id, element) => {
        Swal.fire({
            title: '!Cuidado!',
            text: "Estas a punto de eliminar este elemento ¿De verdad quieres hacerlo?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#756dd1',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar',
            cancelButtonText: "Cancelar"
        }).then (async (result) => {
            if (result.isConfirmed) {
                if(element === "book"){
                    deleteBookRequest(id);
                }else if(element === "community") {
                    deleteCommunityRequest(id);
                }else {
                    deleteEventRequest(id);
                }
                Swal.fire(
                    '¡Eliminado!',
                    'Tu elemento ha sido eliminado con exito',
                    'success'
                )
                // getMyDataBooks();
            }
        })
    }
    function editBtnAction() {
        console.log("editar")
    }
    function exitBtnAction() {
        console.log("eliminar")
    }

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
                                <CIRC__button fillColorBtn="Pancho" onClick = {()=> deleteBtnAction(book._id, "book")}>
                                    <DeleteIcon/>
                                </CIRC__button>
                                <CIRC__button fillColorBtn="Rojo" onClick = {()=> editBtnAction()}>
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
                                <CIRC__button fillColorBtn="Pancho" onClick = {()=> deleteBtnAction(community._id, "community")}>
                                    <DeleteIcon/>
                                </CIRC__button>
                                <CIRC__button fillColorBtn="Rojo" onClick = {()=> editBtnAction()}>
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
                                <RECT__button fillColorBtn="Rojo" onClick = {()=> exitBtnAction()}>
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
                    myEvents.map((event, ind)=> (
                        <TEMPLATE_COMMUNITY_EVENT__div key={ind}>
                            <HEADER_DATA__div>
                                <span>{event.icon}</span>
                                <p>{event.name}</p>
                            </HEADER_DATA__div>
                            <CONTAINER_BTN__div>
                                <CIRC__button fillColorBtn="Pancho" onClick = {()=> deleteBtnAction(event._id, "event")}>
                                    <DeleteIcon/>
                                </CIRC__button>
                                <CIRC__button fillColorBtn="Rojo" onClick = {()=> editBtnAction()}>
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
                                <RECT__button fillColorBtn="Rojo" onClick = {()=> exitBtnAction()}>
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