import Image from 'next/image';

import flecha from '../../assets/change.svg';

const myLoader = ({src, width, quality}) => {
    return `https://uploads.vibra.co/${src}?s=${width}`;
}

/*Syled Components */
import {
    CONTENTCARD__div,
    TEXTTITLE__p,
    CONTENTINFO__div,
    CONTENTIMAGE__div,
    CONTENTTEXT__div,
    TEXTCONTENT__p,
    IMAGE__img,
    CONTENTBOOKS__div,
} from './styles';

export const Card = ({ value }) => {
    return(
        <>
            <CONTENTCARD__div>
                <CONTENTINFO__div>
                    <CONTENTIMAGE__div>
                    <Image
                        loader={myLoader}
                        src= "1/2022/08/fotos-de-perfil-aesthetic.jpg"
                        width={50}
                        height={50}
                        layout="responsive"
                    />
                    </CONTENTIMAGE__div>
                    <CONTENTTEXT__div>
                        <TEXTTITLE__p>{value.nameFriend}</TEXTTITLE__p>
                        <CONTENTBOOKS__div>
                            <TEXTCONTENT__p>{value.BookOne}</TEXTCONTENT__p>
                            <Image
                                src= {flecha}
                            />
                            <TEXTCONTENT__p>{value.BookTwo}</TEXTCONTENT__p>
                        </CONTENTBOOKS__div>
                    </CONTENTTEXT__div>
                </CONTENTINFO__div>
            </CONTENTCARD__div>
        </>
    );

}