import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const CONTAINER__nav = Styled.nav`
    position: fixed;
    right: 0;
    left: 0;
    bottom: 1.5rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 85%;
    height: 2.5rem;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    z-index: 99;
    background: #F9E9DB;
    border-radius: 20px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    & a {
        width: 25px;
        height: 25px;
        display: flex;
        justify-content: center;
        align-items: center;
        & svg {
            width: 100%;
            height: 100%;
        }
    }
`