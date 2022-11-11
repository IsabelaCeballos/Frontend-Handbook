import Cookie from 'js-cookie';
import { useState } from 'react';

/*Components */
import { OptionBar } from './OptionBar';
import { OptionsType } from './OptionsType';
import {PreviewBook} from './PreviewBook';

export const OptionsSection = () => {
    /*Stats options */
    const [choose, setChoose] = useState("books");
    const [chooseSecondary, setChooseSecondary] = useState(0);
    
    /*States data */
    const [dataBook, setDataBook] = useState([]);
    const [myCommunities, setMyCommunities] = useState([]);
    const [communities, setCommunities] = useState([]);
    const [myEvents, setMyEvents] = useState([]);
    const [events, setEvents] = useState([]);

    /*Requests */
    const getMyDataBooks = async () => {
        const response = await fetch('http://localhost:3001/bibliographic_materials', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
            }
        });
        const data = await response.json();
        setDataBook(data.result);
    }
    const getMyCommunities = async () => {
        const response = await fetch('http://localhost:3001/my_communities', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
            }
        });
        const data = await response.json();
        setMyCommunities(data.result);
    }
    const getCommunities = async () => {
        const response = await fetch('http://localhost:3001/member/635b02914ad905d13b414a4c', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
            }
        });
        const data = await response.json();
        console.log(data.result[0].Id_Communities);
        setCommunities(data.result[0].Id_Communities);
    }
    const getMyEvents = async () => {
        const response = await fetch('http://localhost:3001/my_events', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
            }
        });
        const data = await response.json();
        setMyEvents(data.result);
    }
    const getEvents = async () => {
        const response = await fetch('http://localhost:3001/other_events', {
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + Cookie.get('JWT'),
            }
        });
        const data = await response.json();
        setEvents(data.result);
    }

    return (
        <>
            <OptionBar 
                choose={choose} 
                setChoose = {setChoose} 
                setChooseSecondary = {setChooseSecondary}
                getMyDataBooks = {getMyDataBooks}
                getMyCommunities = {getMyCommunities}
                getMyEvents = {getMyEvents}
            />
            <OptionsType 
                opc={
                    choose == "books" 
                    ? ["Disponibles", "Intercambiados"] 
                    : choose == "communities" 
                    ? ["Creadas", "Miembro"] 
                    : ["Creados", "Unidos"]
                } 
                choose={choose}
                chooseSecondary = {chooseSecondary}
                setChooseSecondary = {setChooseSecondary}
                getMyDataBooks = {getMyDataBooks}
                getMyCommunities = {getMyCommunities}
                getMyEvents = {getMyEvents}
                getCommunities = {getCommunities}
                getEvents = {getEvents}
            />
            <PreviewBook
                choose={choose}
                chooseSecondary={chooseSecondary}
                dataBook = {dataBook}
                myCommunities = {myCommunities}
                communities = {communities}
                myEvents = {myEvents}
                events = {events}
                getMyDataBooks = {getMyDataBooks}
            />
        </>
    )
}