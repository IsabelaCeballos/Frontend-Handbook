import { useState } from "react";
import {Star} from '../../../assets/Star';
import { CONTAINER__div } from "./styles";

export const ReviewStars = ({rate, setRate}) => {
    // const [rate, setRate] = useState(0);
    return (
        <>
            <CONTAINER__div>
                {[...Array(5)].map((item, index) => {
                    const givenRating = index + 1;
                    return (
                        <button onClick={() => { setRate(givenRating)}} key={index}>
                            <Star colorFill = {
                                givenRating < rate || givenRating === rate
                                    ? "#EAB686"
                                    : "#FFFFFF"
                                } 
                                colorStroke = "#EAB686"
                            />
                        </button>
                    );
                })}
            </CONTAINER__div>
        </>
    )
}