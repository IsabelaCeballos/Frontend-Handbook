import Styled from 'styled-components';
import GlobalStyles from '../../src/StylesGlobals/globalStyles';

export const BAR_DES__div =  Styled.div`
    position: fixed;
    width: 100%;
    top: 0;
    background: white;
`
export const BAR_DES__section = Styled.section`
    width: 90%;
    background: ${GlobalStyles.COLORS.Verde};
    display: flex;
    align-items: center;
    gap: 10px;
    position: relative;
    margin: 1rem auto;
    border-radius: 100px;
    padding: 5px;   
    color: ${GlobalStyles.COLORS.Blanco};
    font-weight: 500;
    & img {
        width: 2rem;
        height: 2rem;
        border-radius: 100%;
    }

`
export const BTNS__div = Styled.div`
    position: absolute;
    display: flex;
    width: 14rem;
    height: 2rem;
    bottom: -25px;
    right: 0;
    gap: 5px;
    & button {
        width: 100%;
        height: 100%;
        border: 2px solid white;
        border-radius: 20px;
        cursor: pointer;
        color: ${GlobalStyles.COLORS.Blanco}
    }
    & button:first-child {
        background: ${GlobalStyles.COLORS.Rojo};
    }
    & button:last-child {
        background: ${GlobalStyles.COLORS.Pancho};
    }
`
export const CONTAINER_MSJ__div = Styled.div`
    margin: 6rem 0;
    /* background: red; */
    width: 100%;
    background-image: url('../Fondo.png');
    background-size: cover;
    background-repeat: no-repeat;
`
export const MSJ__div = Styled.div`
    margin: 1rem 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: ${props => props.who === "me" ? "flex-end" : "flex-start"};
 & p {
    width: 70%;
    background: ${props => props.who === "me"? "#488674": "#F3F3F3"};
    color: ${props => props.who === "me"? "#F3F3F3": "#488674"};
    font-size: 15px;
    padding: 1rem;
    border-radius: ${props => props.who === "me"? "20px 20px 0px 20px": "20px 20px 20px 0px"};
 }
 & span {
    color: #7B7B7B;
    font-size: 12px;
 }
`
export const BAR_TYPING__section = Styled.section`
    width: 90%;
    background: rgb(173 173 173 / 50%);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
    margin: 1rem auto;
    border-radius: 100px;
    padding: 5px;   
    color: ${GlobalStyles.COLORS.Blanco};
    & textarea {
        width: 90%;
        background: none;
        border: none;
        padding: 0 5px;
        outline: none;
        box-sizing: border-box;
        resize: none;
        font-size: 14px
    }
`
export const BAR_TYPING__div = Styled.div`
    position: fixed;
    width: 100%;
    bottom: 0;
    background: white;
`