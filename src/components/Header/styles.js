import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const CONTAINER__header = Styled.header`
    display: flex;
    width: 85%;
    margin: 0 auto;
    padding: 1rem 0;
    box-sizing: border-box;
    justify-content: space-between;
    align-items: center;
`
export const NAME_APP__h1 = Styled.h1`
    font-weight: 500;
    font-family: ${GlobalStyles.TYPOGRAPIC.roboto};
    font-size: 25px;
`