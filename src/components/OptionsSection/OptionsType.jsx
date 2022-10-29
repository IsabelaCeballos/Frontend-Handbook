/*Syled Components */
import { CONTAINER_TYPE__div, CHOOSE_SECONDARY__button } from './styles';

export const OptionsType = ({
    opc,
    choose,
    chooseSecondary,
    setChooseSecondary,
    getMyDataBooks,
    getMyCommunities,
    getMyEvents,
    getCommunities,
    getEvents
}) => {
    return (
        <>
            <CONTAINER_TYPE__div>
                <CHOOSE_SECONDARY__button 
                    onClick={() => {
                        choose === "books" 
                        ? getMyDataBooks()
                        : choose === "communities"
                        ? getMyCommunities()
                        : choose === "events"
                        ? getMyEvents()
                        :null
                        setChooseSecondary(0);
                    }}
                    border={chooseSecondary == 0 && "apply"}>
                    {opc[0]}
                </CHOOSE_SECONDARY__button>
                <CHOOSE_SECONDARY__button
                    onClick={() => {
                        choose === "books" 
                        ? getMyDataBooks()
                        : choose === "communities"
                        ? getCommunities()
                        : choose === "events"
                        ? getEvents()
                        :null
                        setChooseSecondary(1);
                    }}
                    border={chooseSecondary == 1 && "apply"}>
                    {opc[1]}
                </CHOOSE_SECONDARY__button>
            </CONTAINER_TYPE__div>
        </>
    )
}