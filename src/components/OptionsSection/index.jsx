import { useState } from 'react';
import { OptionBar } from './OptionBar';
import { OptionsType } from './OptionsType';
import PreviewBook from './PreviewBook';

export const OptionsSection = () => {
    const [choose, setChoose] = useState("books");
    const [chooseSecondary, setChooseSecondary] = useState(0);

    return (
        <>
            <OptionBar choose={choose} setChoose = {setChoose} />
            <OptionsType choose={chooseSecondary} setChoose = {setChooseSecondary}
                opc={
                    choose == "books" 
                    ? ["Disponible", "Historial"] 
                    : choose == "communities" 
                    ? ["Creadas", "Miembro"] 
                    : ["Creados", "Unidos"]
                } 
            />
            <PreviewBook
                choose={choose}
                setChoose = {setChoose}
                chooseSecondary={chooseSecondary}
                setChooseSecondary = {setChooseSecondary}
            />
        </>
    )
}