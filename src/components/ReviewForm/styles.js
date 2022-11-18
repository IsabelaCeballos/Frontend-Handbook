import Styled from 'styled-components';
import GlobalStyles from '../../../src/StylesGlobals/globalStyles';

export const CONTAINER__section = Styled.section`
    display:flex;
    flex-direction: column;
    align-items: center;
`
export const TEXT__p = Styled.p`
    display: ${props => props.show == "show" ? "block": "none"};
    text-align: center;
    /* font-family: ${GlobalStyles.TYPOGRAPIC.roboto}; */
    margin: 0 0 1rem;
`