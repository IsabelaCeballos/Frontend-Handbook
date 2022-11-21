import Styled from 'styled-components';
import GlobalStyles from '../../StylesGlobals/globalStyles';

export const CONTAINER__div = Styled.div`
    width: 82%;
    border-radius: 20px;
    background: #F9E9DB;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`
export const CONTAINER_TYPE__div= Styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1.5rem auto;
`
export const CHOOSE_SECONDARY__button = Styled.button`
    /* font-family: ${GlobalStyles.TYPOGRAPIC.roboto}; */
    font-weight: 500;
    color: ${GlobalStyles.COLORS.Negro};
    font-size: ${GlobalStyles.FONT_SIZES.Mediana};
    background: none;
    border: none;
    cursor: pointer;
    padding-bottom: 5px;
    box-sizing: border-box;
    border-bottom: solid ${GlobalStyles.COLORS.Pancho} ${props => props.border == "apply" ? 3: 0}px;
`
export const CONTAINER_BOOK__section = Styled.section`
    width: 82%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 25px;
    margin: 0 auto 2rem;
    row-gap: 2rem;
`
export const TEMPLATE_IMG_BOOK__div = Styled.div`
    height: 12rem;
    border-radius: 10px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.1));
    & img {
        width: 100%;
        height: 90%;
        object-fit: cover;
        border-radius: 10px;
    }
    & div {
        position: absolute;
        display: flex;
        width: 100%;
        justify-content: center;
        gap: 15px;
        bottom: 3px;
    }
`
export const TEMPLATE_COMMUNITY_EVENT__div= Styled.div`
    /* font-family: ${GlobalStyles.TYPOGRAPIC.roboto}; */
    position: relative;
    height: 9rem;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`
export const DETAILS__p = Styled.p`
    font-size: ${GlobalStyles.FONT_SIZES.Mediana};
`
export const HEADER_DATA__div = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 90%;
    padding: 10px;
    box-sizing: border-box;
    & span {
        font-size: 23px;
    }
    & p {
        font-size: 15px;
    }
`
export const CONTAINER_BTN__div = Styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 15px;
    bottom: -15px;
`