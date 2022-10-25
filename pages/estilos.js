import Styled from 'styled-components';
import GlobalStyle from '../src/StylesGlobals/globalStyles';

export const HOLA__div = Styled.div`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Grande};
    font-weight: bold;
    background: ${GlobalStyle.COLORS.Pancho};
`
export const TEXT__p = Styled.p`
    font-family: ${GlobalStyle.TYPOGRAPIC.roboto};
    font-size: ${GlobalStyle.FONT_SIZES.Pequeña};
    color: ${GlobalStyle.COLORS.Negro} ;
    font-weight: bold;
    background: pink;
`
