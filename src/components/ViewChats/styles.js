import Styled from 'styled-components';
import GlobalStyle from '../../StylesGlobals/globalStyles.js';

export const TITLE__h2 = Styled.h2`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Grande};
    font-weight: 500;
    text-align: center;
`
export const CONTENTCARD__div = Styled.div`

`
export const CONTENTINFO__div = Styled.div`
    width: 100%;
    display: flex;
    align-items:center;
    justify-content: center;
    padding:1rem 2rem;
    margin-top: 1rem;
    box-sizing: border-box;
`

export const CONTENTIMAGE__div = Styled.div`
    width: 20%;
    margin-right: 0.5rem;
    & img{
        border-radius: 50%;
    }
`
export const CONTENTTEXT__div = Styled.div` 
    width: 80%;
    display: flex;
    flex-direction: column;
`

export const TEXTTITLE__p = Styled.p`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Mediana};
    font-weight: 600;
    margin-bottom: 0.3rem;
`
export const TEXTCONTENT__p = Styled.p`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: 14px;
    text-align: justify;
`

export const CONTENTBOOKS__div = Styled.div`
    display: flex;
    justify-content: space-around;
`