import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const CONTAINER__nav = Styled.nav`
    position: absolute;
    right: 0;
    left: 0;
    bottom: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 85%;
    height: 2rem;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    z-index: 99;
    background: rgba(234, 182, 134, 0.3);
    border-radius: 20px;
`