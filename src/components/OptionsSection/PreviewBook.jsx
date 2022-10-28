import Cookie from 'js-cookie';
import { useEffect, useState } from "react";

import { CIRC__button } from '../Buttons';
import { CONTAINER_BOOK__section, TEMPLATE_IMG_BOOK__div } from './styles';

import { EditIcon } from '../../assets/Edit';
import { DeleteIcon } from '../../assets/Delete';

export default function PreviewBook(props) {
    const {
        choose,
        setChoose,
        chooseSecondary,
        setChooseSecondary
    } = props
    
    const [dataBook, setDataBook] = useState([]);

    useEffect(() => { 
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
        getMyDataBooks();
    },[]);
    return (
        <CONTAINER_BOOK__section>
            {
                dataBook ? 
                    dataBook.map((book, ind)=> (
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
            }
        </CONTAINER_BOOK__section>
    )
}