import Styled from 'styled-components';
import GlobalStyles from '../../../StylesGlobals/globalStyles';

export const CONTAINER__section = Styled.section`
    width: 80%;
    align-items: center;
    /* font-family: ${GlobalStyles.TYPOGRAPIC.roboto}; */
    margin: 0 auto 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    & h4 {
        width: 100%;
        font-weight: 500;
    }
`
export const CONTAINER_BTNS__div = Styled.div`
    width: 98%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 1.3rem auto 1rem;
`
export const DESCRIPTION__btn = Styled.button`
    width: 100%;
    height: 1.8rem;
    border-radius: 6px;
    color: black;
    font-size: 14px;
    /* font-family: ${GlobalStyles.TYPOGRAPIC.roboto}; */
    outline: none;
    cursor: pointer;
    border: ${props => props.border=="2px" ? "2px solid #EAB686": "none"};
    background: ${
        props => props.color == "good" ? 
            "rgba(134, 227, 206, 0.3)"
        : props.color == "regular" ? 
            "rgba(234, 182, 134, 0.3)"
        : props.color == "bad" ? "rgba(255, 133, 148, 0.3)"
        : null
    };
`