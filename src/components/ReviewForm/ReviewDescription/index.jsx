import { useState } from "react"
import {CONTAINER__section,CONTAINER_BTNS__div, DESCRIPTION__btn} from "./styles"

export const ReviewDescription = ({setDescription}) => {
    const [border, setBorder] = useState([]);
    return (
        <CONTAINER__section>
            <h4>Describe tu experiencia</h4>
            <CONTAINER_BTNS__div>
                <DESCRIPTION__btn color="good" border={border[0] == 1 ? "2px":null} onClick={() => {setBorder([1,0,0,0,0,0]); setDescription("Exelente")}}>Excelente</DESCRIPTION__btn>
                <DESCRIPTION__btn color="good" border={border[1] == 1 ? "2px":null} onClick={() => {setBorder([0,1,0,0,0,0]); setDescription("Bueno")}}>Bueno</DESCRIPTION__btn>
                <DESCRIPTION__btn color="regular" border={border[2] == 1 ? "2px":null} onClick={() => {setBorder([0,0,1,0,0,0]); setDescription("Regular")}}>Regular</DESCRIPTION__btn>
                <DESCRIPTION__btn color="regular" border={border[3] == 1 ? "2px":null} onClick={() => {setBorder([0,0,0,1,0,0]); setDescription("Puede mejorar")}}>Puede mejorar</DESCRIPTION__btn>
                <DESCRIPTION__btn color="bad" border={border[4] == 1 ? "2px":null} onClick={() => {setBorder([0,0,0,0,1,0]); setDescription("Mala")}}>Mala</DESCRIPTION__btn>
                <DESCRIPTION__btn color="bad" border={border[5] == 1 ? "2px":null} onClick={() => {setBorder([0,0,0,0,0,1]); setDescription("Muy mala")}}>Muy mala</DESCRIPTION__btn>
            </CONTAINER_BTNS__div>
        </CONTAINER__section>
    )
}