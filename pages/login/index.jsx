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
    CONTENTBUTTON__btn
} from './estilos';

function HomePage() {

    const autentication = async () => {
        //console.log('holi desde autentication');
        try {
            const response = await fetch('', {
                headers: {
                    'Content-Type': 'application/json',
                    //'Authorization': `Bearer ${userAutentication.token}`
                },
                method: 'GET',
                //body: JSON.stringify(enviarPlan)
            });
            const responseJson = await response.json();
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
            <CONTENTBUTTON__btn onClick={() => autentication()}>
                <Image src={logoGoogle} alt='logo_google' height={20} width={20} />
                Inicia con Google
            </CONTENTBUTTON__btn>
        </PRINCIPAL__div>
    )
}

export default HomePage