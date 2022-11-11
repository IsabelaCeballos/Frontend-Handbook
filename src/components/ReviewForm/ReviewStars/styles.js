import Styled from 'styled-components';
import GlobalStyles from '../../../StylesGlobals/globalStyles';

export const CONTAINER__div = Styled.div`
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 1.5rem auto;
    & button {
        background: none;
        outline: none;
        border: none;
        cursor: pointer;
   }
`