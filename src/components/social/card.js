import { RECT__button } from '../Buttons/index.jsx';

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

export const Card = ({tipo, value }) => {
  
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
                    <RECT__button fillColorBtn="Rojo">Unirse</RECT__button>
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
                    <RECT__button fillColorBtn="Verde">Participar</RECT__button>
                </CONTENTBUTTON__div>
            </>
            :null
        }
        </>
    );
}
