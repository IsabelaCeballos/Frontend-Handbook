import Styled from 'styled-components';
import GlobalStyle from '../../StylesGlobals/globalStyles.js';

export const PRINCIPAL__section = Styled.section`
    width: 85%;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    box-sizing: border-box;
`
export const TEXT__label = Styled.label`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    font-weight: 500;
    margin: 0.6rem;
`
export const DATA__input = Styled.input`
    width: 100%;
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    margin-top: 0.4rem;
    margin-bottom: 0.4rem;
    border-radius:2rem;
    border: 0.01rem solid ${GlobalStyle.COLORS.Negro};
    padding: 0.4rem 0.8rem;
    outline: none;
    box-sizing: border-box;
`
export const DATA__file = Styled.input`
    width: 100%;
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    margin-top: 0.4rem;
    padding: 0.4rem 0.8rem;
    outline: none;
    box-sizing: border-box;
`

export const DATA__textArea = Styled.textarea`
    width: 100%;
    height: 5rem;
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    margin: 0.4rem;
    border-radius:1rem;
    border: 0.01rem solid ${GlobalStyle.COLORS.Negro};
    padding: 0.4rem 0.8rem;
    outline: none;
    box-sizing: border-box;
`
export const CONTENTIMAGE__div = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    padding: 0rem 1.5rem;
    box-sizing: border-box;
`
export const CONTENTBUTTON__div = Styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    padding: 0rem 1.5rem;
    box-sizing: border-box;
`
export const ERROR__p = Styled.p`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: 13px;
    font-weight: 500;
    margin: 0.2rem 0.8rem;
    color: ${GlobalStyle.COLORS.Rojo};
`