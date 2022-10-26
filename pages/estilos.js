import styled from 'styled-components';
import Styled from 'styled-components';
import GlobalStyle from '../src/StylesGlobals/globalStyles';

export const PRINCIPAL__div = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;
`
export const TITLE__p = Styled.p`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: 25px;
    font-weight: 500;
`
export const CONTENTP__div = Styled.div`
    padding-top: 2.9rem;
    padding-left: 2.5rem;
    padding-right:2.5rem;
    text-align: center;
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
`
export const CONTENTIMAGE__div = Styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const CONTENTBUTTON__div = Styled.button`
    width: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.9rem;
    border: none;
    margin-top: 2rem;
    background: ${GlobalStyle.COLORS.Rojo};
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    color: ${GlobalStyle.COLORS.Blanco};
`
