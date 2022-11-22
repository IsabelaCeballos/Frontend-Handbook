import Image from 'next/image';
import Router from 'next/router';

import flecha from '../../assets/change.svg';

const myLoader = ({src, width, quality}) => {
    return `https://uploads.vibra.co/${src}?s=${width}`;
}

/**Styled Components**/
import {
    CONTENTINFO__div,
    CONTENTIMAGE__div,
    CONTENTTEXT__div, 
    TEXTTITLE__p,
    TEXTCONTENT__p,
    CONTENTBOOKS__div
} from './styles';

export const Card = (props) => {
    const {value} = props
    // console.log("card" , value)
    const toChatting = (id, idOwner) => {
        Router.push(`/chats/${id}_${idOwner}`);
    }
    return(
        <>
            {   value.state !== "Intercambio Realizado" &&
                <div>
                    <CONTENTINFO__div onClick={() => toChatting(value._id, value.Id_User_Two[0]._id)}>
                        <CONTENTIMAGE__div>
                        <Image
                            src= {value.Id_User_One[0].photo}
                            width={30}
                            height={30}
                            layout="responsive"
                        />
                        </CONTENTIMAGE__div>
                        <CONTENTTEXT__div>
                            <TEXTTITLE__p>{value.Id_User_One[0].name}</TEXTTITLE__p>
                            <CONTENTBOOKS__div>
                                <TEXTCONTENT__p>{value.Id_Book_One[0].name}</TEXTCONTENT__p>
                                <Image
                                    src= {flecha}
                                />
                                <TEXTCONTENT__p>{value.Id_Book_Two[0].name}</TEXTCONTENT__p>
                            </CONTENTBOOKS__div>
                        </CONTENTTEXT__div>
                    </CONTENTINFO__div>
                </div> 
            }
        </>
    );

}