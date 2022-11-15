import { RECT__button } from '../Buttons/index.jsx';
import Cookie from 'js-cookie';

/*Syled Components */
import {
    CONTENTCARD__div,
    TEXTTITLE__p,
    TEXTTITLEICON__p,
    CONTENTIMAGE__div,
    TEXTCONTENT__p,
    TEXTTITLELOCATION__p,
    CONTENTBUTTON__div,
} from './styles';

/** ALERTS */
import Swal from 'sweetalert2';

export const Card = ({tipo, value }) => {

    const newMemberEvent = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/new_participant/${id}`,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                },
                method: 'POST'
            });
            const responseAddEvent = await response.json();
            console.log(responseAddEvent);
        } catch (error) {
            console.error(error);
        }
        Swal.fire({
            icon: "success",
            title: 'Ahora eres un participante más...',
            iconColor: '#FF8594',
            confirmButtonColor: '#FF8594',
            confirmButtonText: 'OK',
            width: 400,
        })
    };

    const newMemberCommunity = async (id) => {
        try {
            const response = await fetch(`http://localhost:3001/new_member/${id}`,{
                headers:{
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookie.get('JWT'),
                },
                method: 'POST'
            });   
            const responseAddCommunity = await response.json();
            console.log(responseAddCommunity);        
        } catch (error) {
            console.error(error);
        }
        Swal.fire({
            icon: "success",
            title: 'Te uniste correctamente',
            iconColor: '#75C0AA',
            confirmButtonColor: '#75C0AA',
            confirmButtonText: 'OK',
            width: 400,
        })
    };  

    return (
        <>
        {
            tipo === "community" ?
            <>
                <CONTENTCARD__div>
                    <CONTENTIMAGE__div>
                        <TEXTTITLEICON__p>{value.icon}</TEXTTITLEICON__p>
                        <TEXTTITLE__p>{value.name}</TEXTTITLE__p>
                    </CONTENTIMAGE__div>
                    <TEXTCONTENT__p>{value.description}</TEXTCONTENT__p>
                </CONTENTCARD__div>
                <CONTENTBUTTON__div>
                    <RECT__button onClick ={() => newMemberCommunity(value._id)} fillColorBtn="Rojo">Unirse</RECT__button>
                </CONTENTBUTTON__div>
            </>
            :tipo == "event" ?
            <>
                <CONTENTCARD__div>
                    <CONTENTIMAGE__div>
                        <div><TEXTTITLEICON__p>{value.icon}</TEXTTITLEICON__p></div>
                        <div>
                            <TEXTTITLE__p>{value.name}</TEXTTITLE__p>
                            <TEXTTITLELOCATION__p>Ubicación: {value.location}</TEXTTITLELOCATION__p>
                        </div>
                    </CONTENTIMAGE__div>
                    <TEXTCONTENT__p>{value.description}</TEXTCONTENT__p>
                </CONTENTCARD__div>
                <CONTENTBUTTON__div>
                    <RECT__button onClick ={() => newMemberEvent(value._id)} fillColorBtn="Verde">Participar</RECT__button>
                </CONTENTBUTTON__div>
            </>
            :null
        }
        </>
    );
}
