/*Components */
import { LEFT_SIDE__section, RIGHT_SIDE__section} from '../Buttons'

/*Syled Components */
import { CONTAINER__section, DETAILS_USER__div, DETAILS_BOOK__div, CONTAINER_USER_IMAGE__div } from './styles'

import Image from 'next/image';
import Cookies from 'js-cookie';


export const SelectBook = ({DATA, setDataBook}) => {
    
    const tapTap = async () => {
        try {
            console.log("me diste clickkk izq");
            const response = await fetch(`http://localhost:3001/bibliographic_materials_dislike`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('JWT'),
                }
            });
            const data = await response.json();
            console.log(data);
            setDataBook(data.result);
        } catch (error) {
            console.error(error);
        }
    }
    
    const tapTop = async () => {
        console.log("me diste clickkk der");
        try {
            const response = await fetch(`http://localhost:3001/bibliographic_materials_like/${DATA.book[0]._id}`, {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + Cookies.get('JWT'),
                },
                method: 'POST'
            });
            const data = await response.json();
            console.log(data);
            setDataBook(data.result);
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <CONTAINER__section>
                <DETAILS_USER__div>
                    <CONTAINER_USER_IMAGE__div>
                        <Image src={DATA.user.photo} width={48} height={48} layout="responsive" alt="Image user profile Google" />
                    </CONTAINER_USER_IMAGE__div>
                    <div>
                        <p>{DATA.user.name}</p>
                        <span>estrellas</span>
                    </div>
                </DETAILS_USER__div>
                <DETAILS_BOOK__div>
                    <img src={DATA.book[0].photo} alt="image book" />
                    {/* <Image src={DATA.book[0].photo} width="100%" height="100%"  alt="Image book" /> */}
                </DETAILS_BOOK__div>
                <h4>{DATA.book[0].name}</h4>
            </CONTAINER__section>
            <LEFT_SIDE__section handler={tapTap} />
            <RIGHT_SIDE__section handler={tapTop} />
        </>
    )
}