import { ReviewStars } from './ReviewStars';
import { ReviewDescription } from './ReviewDescription';
import { RECT__button } from "../Buttons";
import { CONTAINER__section, TEXT__p } from "./styles";
import { useState } from 'react';
import Cookie from 'js-cookie';
import Router from 'next/router';

export const ReviewForm = ({ exchange }) => {
    const [rate, setRate] = useState(0);
    const [description, setDescription] = useState("");
    const [warning, setWarning] = useState("hide");

    const sendData = async () => {
        if (rate !== 0 && description !== "") {
            // console.log(exchange);
            // console.log(rate);
            // console.log(description);
            setWarning("hide");
            const stars = JSON.stringify({review:rate});
            try {
                const response = await fetch(`http://localhost:3001/Exchange/${exchange}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: "PUT",
                    body:stars
                });
                const responseJson = await response.json();
                // console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
            Router.push("/home");

        } else {
            setWarning("show");
        }
    }
    return (
        <CONTAINER__section>
            <ReviewStars rate={rate} setRate={setRate} />
            <ReviewDescription setDescription={setDescription} />
            <TEXT__p show={warning} >⚠️ Tienes campos sin seleccionar ⚠️</TEXT__p>
            <RECT__button fillColorBtn="Verde" width="12rem" onClick={() => sendData()}>Enviar reseña</RECT__button>
        </CONTAINER__section>
    )
}