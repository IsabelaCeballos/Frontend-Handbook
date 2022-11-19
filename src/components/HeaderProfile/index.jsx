import Image from 'next/image'

/*styled Components */
import { CONTAINER__div } from './styles';


export const HeaderProfile = ({photoUser, nameUser}) => {
    
    return (
        <>
            {
            photoUser ?
                <CONTAINER__div>
                    <Image src={photoUser} width={80} height={80} alt="Image user profile Google" />
                    <h3>{nameUser}</h3>
                </CONTAINER__div> 
            : <p>Cargando...</p>
            }
        </>
    )
}