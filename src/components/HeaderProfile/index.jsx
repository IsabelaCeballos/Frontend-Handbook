import Cookie from 'js-cookie';
import { useRouter } from 'next/router'
import Image from 'next/image';

/*styled Components */
import { CONTAINER__div, LOG_OUT__btn } from './styles';


export const HeaderProfile = ({ photoUser, nameUser }) => {

    const router = useRouter();

    return (
        <>
            {
                photoUser ?
                    <CONTAINER__div>
                        <Image src={photoUser} width={80} height={80} alt="Image user profile Google" />
                        <h3>{nameUser}</h3>
                        <LOG_OUT__btn onClick={() => {
                            Cookie.remove('JWT');
                            router.push('/login');
                        }}>
                            Cerrar Sesión
                        </LOG_OUT__btn>
                    </CONTAINER__div>
                    : <p>Cargando...</p>
            }
        </>
    )
}