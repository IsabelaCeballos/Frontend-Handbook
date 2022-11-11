import { ReviewStars } from './ReviewStars';
import { ReviewDescription } from './ReviewDescription';
import {RECT__button} from "../Buttons";
import { CONTAINER__section, TEXT__p } from "./styles";
import { useState } from 'react';

export const ReviewForm = ({dataUser}) => {
    const [rate, setRate] = useState(0);
    const [description, setDescription] = useState("");
    const [warning, setWarning] = useState("hide");
    // const [dataToSend, setDataToSend] = useState({idUser: dataUser, rate:"", description: ""});

    const sendData = () => {
        if (rate !== 0 && description !== "") {
            console.log(dataUser);
            console.log(rate);
            console.log(description);
            setWarning("hide");
        }else{
            setWarning("show");
        }
    }
    return (
        <CONTAINER__section>
            <ReviewStars rate = {rate} setRate = {setRate}/>
            <ReviewDescription setDescription = {setDescription}/>
            <TEXT__p show = {warning} >⚠️ Tienes campos sin seleccionar ⚠️</TEXT__p>
            <RECT__button fillColorBtn="Verde" width="12rem" onClick={() => sendData()}>Enviar reseña</RECT__button>
        </CONTAINER__section>
    )
}