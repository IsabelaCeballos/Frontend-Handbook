import Cookie from 'js-cookie';
import { useRouter } from 'next/router'
import Image from 'next/image';

/*styled Components */
import { CONTAINER__div, LOG_OUT__link } from './styles';


export const HeaderProfile = ({ photoUser, nameUser }) => {

    const router = useRouter();

    return (
        <>
            {
                photoUser ?
                    <CONTAINER__div>
                        <Image src={photoUser} width={80} height={80} alt="Image user profile Google" />
                        <h3>{nameUser}</h3>
                        <button onClick={() => {
                            Cookie.remove('JWT');
                            router.push('/login');
                        }}>
                            <LOG_OUT__link>Cerrar sesión</LOG_OUT__link>
                        </button>
                    </CONTAINER__div>
                    : <p>Cargando...</p>
            }
        </>
    )
}