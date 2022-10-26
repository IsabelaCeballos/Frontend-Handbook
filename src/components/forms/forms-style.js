import Styled from 'styled-components';
import GlobalStyle from '../../StylesGlobals/globalStyles.js';

export const PRINCIPAL__section = Styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 0rem 1.5rem;
`
export const TEXT__label = Styled.label`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    font-weight: 500;
    margin: 0.6rem;
`
export const DATA__input = Styled.input`
    width: 85%;
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    margin: 0.4rem;
    border-radius:2rem;
    border: 0.01rem solid ${GlobalStyle.COLORS.Negro};
    padding: 0.4rem 0.8rem;
    outline: none;
`
export const DATA__textArea = Styled.textarea`
    width: 85%;
    height: 5rem;
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    margin: 0.4rem;
    border-radius:1rem;
    border: 0.01rem solid ${GlobalStyle.COLORS.Negro};
    padding: 0.4rem 0.8rem;
    outline: none;
`
export const CONTENTIMAGE__div = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0rem 1.5rem;
`