import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const CONTAINER__div = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;
    gap: 10px;
    /* font-family: ${GlobalStyles.TYPOGRAPIC.roboto}; */
    & img {
        width: 5rem;
        height: 5rem;
        border-radius: 100%;
        object-fit: cover;
    }
    & h3 {
        color: ${GlobalStyles.COLORS.Negro};
        font-weight: 500;
    }
`