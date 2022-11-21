import Styled from 'styled-components';
import GlobalStyle from '../../StylesGlobals/globalStyles.js';

export const PRINCIPAL__div = Styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const TITLE__h2 = Styled.h2`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Grande};
    font-weight: 500;
    text-align: center;
    margin: 2rem;
`
export const CONTENTCARD__div = Styled.div`
    width: 80%;
    padding: 1rem 1.5rem;
    margin-top: 1rem;
    margin-left: 1rem;
    margin-right: 1rem;
    box-sizing: border-box;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    position: relative;
    -webkit-box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.25);
    -moz-box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.25);
    box-shadow: 1px 3px 5px 1px rgba(0,0,0,0.25);   
`
export const CONTENTIMAGE__div = Styled.div`
    display: flex;
    align-items:center;
    justify-content: flex-start;
    margin-bottom:0.5rem;
`

export const TEXTTITLEICON__p = Styled.p`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: 30px;
`
export const TEXTTITLE__p = Styled.p`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    font-weight: 600;
    margin-left: 0.5rem;
`
export const TEXTCONTENT__p = Styled.p`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    text-align: justify;
`
export const TEXTTITLELOCATION__p = Styled.p`
    /* font-family: ${GlobalStyle.TYPOGRAPIC.roboto}; */
    font-size: 14px;
    font-weight: 450;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
`
export const CONTENTMEMBER__div = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const TEXTMEMBER__p = Styled.p`
    font-size: 13px;
    font-weight: 600;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
`
export const TEXTDATE__p = Styled.p`
    font-size: 13px;
    color: ${GlobalStyle.COLORS.Pancho};
    font-weight: 450;
    margin-left: 0.5rem;
    margin-top: 0.3rem;
`

export const CONTENTBUTTON__div = Styled.div`
    width: 60%;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 0.5rem;
    position: static;
    z-index: 3;
    margin-top: -0.5rem;
`