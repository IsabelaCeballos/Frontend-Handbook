import { CONTAINER_TYPE__div, CHOOSE_SECONDARY__button } from './styles';

export const OptionsType = ({opc, choose, setChoose}) => {
    return (
        <>
            <CONTAINER_TYPE__div>
                <CHOOSE_SECONDARY__button 
                    onClick={() => setChoose(0)}
                    border={choose == 0 && "apply"}>
                    {opc[0]}
                </CHOOSE_SECONDARY__button>
                <CHOOSE_SECONDARY__button
                    onClick={() => setChoose(1)}
                    border={choose == 1 && "apply"}>
                    {opc[1]}
                </CHOOSE_SECONDARY__button>
            </CONTAINER_TYPE__div>
        </>
    )
}