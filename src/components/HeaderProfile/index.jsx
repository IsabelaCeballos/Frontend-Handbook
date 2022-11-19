import Image from 'next/image'
import Link from 'next/link';

/*styled Components */
import { CONTAINER__div, LOG_OUT__link } from './styles';


export const HeaderProfile = ({photoUser, nameUser}) => {
    
    return (
        <>
            {
            photoUser ?
                <CONTAINER__div>
                    <Image src={photoUser} width={80} height={80} alt="Image user profile Google" />
                    <h3>{nameUser}</h3>
                    <Link href="/logout">
                        <LOG_OUT__link>Cerrar sesión</LOG_OUT__link>
                    </Link>
                </CONTAINER__div> 
            : <p>Cargando...</p>
            }
        </>
    )
}