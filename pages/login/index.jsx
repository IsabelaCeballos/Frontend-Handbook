import Image from 'next/image';

/*Assets */
import logoPrincipal from '../../src/assets/logo_welcome.svg'
import logoGoogle from '../../src/assets/google.svg';

/*Syled Components */
import {
    PRINCIPAL__div,
    TITLE__p,
    CONTENTP__div,
    CONTENTIMAGE__div,
    CONTENTA__a
} from './estilos';
import Link from 'next/link';

function HomePage() {

    const autentication = async () => {
        console.log('holi desde autentication');
        try {
            const response = await fetch('localhost:3001/auth/google', {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'GET',
            });
            const responseJson = await response.json();
            console.log(responseJson);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <PRINCIPAL__div>
            <TITLE__p>HandBook</TITLE__p>
            <CONTENTP__div>
                <p>Dale otra vida a tus libros. Inicia ahora y encuentra tu próxima aventura literaria.</p>
            </CONTENTP__div>
            <CONTENTIMAGE__div>
                <Image src={logoPrincipal} alt='logo_app' />
            </CONTENTIMAGE__div>
            <CONTENTA__a href='http://localhost:3001/auth/google'>
                <Image src={logoGoogle} alt='logo_google' height={20} width={20} />
                Inicia con Google
            </CONTENTA__a>
        </PRINCIPAL__div>
    )
}

export default HomePage