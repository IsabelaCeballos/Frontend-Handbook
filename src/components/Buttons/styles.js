import Styled from 'styled-components';
import GlobalStyle from '../../StylesGlobals/globalStyles';

export const BUTTON__button = Styled.button`
    width: ${props => props.width};
    display : block;
    margin: 1rem;
    color: ${GlobalStyle.COLORS.Blanco};
    font-weight: bold;
    padding: 0 1rem;
    font-size: 13px;
    height: 1.6rem;
    border: none;
    border-radius: 20px;
    background: ${props => GlobalStyle.COLORS[props.fillColorBtn]};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`
export const Circle__button = Styled.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem;
    border: none;
    border-radius: 100%;
    background: ${props => GlobalStyle.COLORS[props.fillColorBtn] ||  props.fillColorBtn};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`