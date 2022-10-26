import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const BAR__container = Styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    margin: 0 auto;
    width: 85%;
    height: 1.7rem;
    border-radius: 20px;
    border: none;
    background: rgba(234, 182, 134, 0.3);
    color: ${GlobalStyles.COLORS.Pancho};
`
export const SEARCH__input = Styled.input`
    width: 82%;
    border: none;
    background: none;
    color: #bb814c;
    outline: none;
    font-weight: bold;
    &::placeholder {
        color: ${GlobalStyles.COLORS.Pancho};
    }
`
export const CONTAINER_ICON__button = Styled.button`
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    outline: none;
    visibility: ${(props) => props.visibility};
    cursor: pointer;
`