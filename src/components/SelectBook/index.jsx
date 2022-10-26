/*Components */
import { LEFT_SIDE__section, RIGHT_SIDE__section} from '../Buttons'

/*Syled Components */
import { CONTAINER__section, DETAILS_USER__div, DETAILS_BOOK__div, CONTAINER_USER_IMAGE__div } from './styles'

export const SelectBook = (props) => {
    const {DATA} = props;
    const tapTap = () => {console.log("me diste clickkk izq") }
    const tapTop = () => {console.log("me diste clickkk der") }
    return (
        <>
            <CONTAINER__section>
                <DETAILS_USER__div>
                    <CONTAINER_USER_IMAGE__div>
                        <img src={DATA.imgUserUrl} alt="user image" />
                    </CONTAINER_USER_IMAGE__div>
                    <div>
                        <p>{DATA.nameUser}</p>
                        <span>{DATA.starsProm} estrellas</span>
                    </div>
                </DETAILS_USER__div>
                <DETAILS_BOOK__div>
                    <img  src={DATA.imgBookUrl} alt="book image" />
                </DETAILS_BOOK__div>
                <h4>{DATA.titleBook}</h4>
            </CONTAINER__section>
            <LEFT_SIDE__section handler={tapTap} />
            <RIGHT_SIDE__section handler={tapTop} />
        </>
    )
}