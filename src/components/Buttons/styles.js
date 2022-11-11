import Styled from 'styled-components';
import GlobalStyle from '../../StylesGlobals/globalStyles';

export const RECTANGLE__button = Styled.button`
    width: ${props => props.width};
    /* display : block; */
    /* margin: 1rem; */
    color: ${props => GlobalStyle.COLORS[props.fontColor] || props.fontColor || GlobalStyle.COLORS.Blanco };
    font-weight: 600;
    font-size: 15px;
    padding: 0 1rem;
    height: 2rem;
    border: none;
    border-radius: 20px;
    background: ${props => GlobalStyle.COLORS[props.fillColorBtn] ||  props.fillColorBtn};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
export const CIRCLE__button = Styled.button`
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 1rem; */
    border: none;
    border-radius: 100%;
    background: ${props => GlobalStyle.COLORS[props.fillColorBtn] ||  props.fillColorBtn};
    cursor: pointer;
    &:hover {
        opacity: 0.7;
    }
`;
const CONTAINER_SIDE__section = Styled.section`
    width: fit-content;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
`;
export const CONTINER_SIDE_LEFT = Styled(CONTAINER_SIDE__section)`
    left: 0;
`;
export const CONTINER_SIDE_RIGHT = Styled(CONTAINER_SIDE__section)`
    right: 0;
`;
export const SIDE__button = Styled.button`
    border: none;
    background: transparent;
    width: 100%;
    height: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 99;
    cursor: pointer;
`;