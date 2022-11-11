import Image from 'next/image'

/*styled Components */
import { CONTAINER__div } from './styles';

export const HeaderProfile = ({photoUser, nameUser}) => {
    return (
        <>
            {
            photoUser ?
                <CONTAINER__div>
                    <img src={photoUser} width={80} height={80} alt="User profile image from Google" />
                    <h3>{nameUser}</h3>
                </CONTAINER__div> 
            : <p>Cargando...</p>
            }
        </>
    )
}