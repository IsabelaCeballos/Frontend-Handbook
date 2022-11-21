import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const CONTAINER__section = Styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 82%;
    height: 100%;
    /* margin: 2rem auto; */
    border-radius: 10px;
    background: rgba(239,239,239,0.2);
    padding: 1rem 2.8rem;
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgb(0 0 0 / 25%);
    text-align: center;
`
export const DETAILS_USER__div = Styled.div`
    width: 100%;
    margin: 0 auto;
    display: flex;
    gap: 0.5rem;
    justify-content: flex-start;
    text-align: start;
    align-items: center;
    font-size: 12px;
    font-weight: 500;
`
export const CONTAINER_USER_IMAGE__div = Styled.div`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 100%;
    & span img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 100%;
        background-color: #000000;
    }
`
export const DETAILS_BOOK__div = Styled.div`
    width: 100%;
    border-radius: 10px;
    height: 75%;
    margin: 1rem 0;
    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 10px;
    }
`