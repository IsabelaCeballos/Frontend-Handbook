import { CONTAINER__div } from './styles';
import { RECT__button } from '../Buttons';

export const OptionBar = ({choose, setChoose}) => {
    return (
        <>
            <CONTAINER__div>
                <RECT__button 
                    onClick={() => setChoose("books")} 
                    fillColorBtn={choose=="books"?"Pancho":"#F9E9DB"} 
                    fontColor={choose == "books" ? "Blanco":"#464646"} >
                    Libros
                </RECT__button>
                <RECT__button 
                    onClick={() => setChoose("communities")} 
                    fillColorBtn={choose=="communities"?"Pancho":"#F9E9DB"} 
                    fontColor={choose == "communities" ? "Blanco":"#464646"}>
                    Comunidades
                </RECT__button>
                <RECT__button 
                    onClick={() => setChoose("events")} 
                    fillColorBtn={choose=="events"?"Pancho":"#F9E9DB"} 
                    fontColor={choose == "events" ? "Blanco":"#464646"}>
                    Eventos
                </RECT__button>
            </CONTAINER__div>
        </>
    )
}