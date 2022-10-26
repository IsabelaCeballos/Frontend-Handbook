import Image from 'next/image';
import libro from '../src/assets/logo.png';
import logoPrincipal from '../src/assets/logo_welcome.svg'
import logoGoogle from '../src/assets/google.svg';

import { PRINCIPAL__div,
        TITLE__p, 
        CONTENTP__div, 
        CONTENTIMAGE__div, 
        CONTENTBUTTON__btn} from './estilos.js';

function HomePage() {
    return(
        <PRINCIPAL__div>
                <TITLE__p>HandBook</TITLE__p>
            <CONTENTP__div>
                <p>Dale otra vida a tus libros. Inicia ahora y encuentra tu próxima aventura literaria.</p>
            </CONTENTP__div>
            <CONTENTIMAGE__div>
                <Image src={logoPrincipal} alt='logo_app'/>
            </CONTENTIMAGE__div>
            <CONTENTBUTTON__btn>
                <Image src={logoGoogle} height={20} width={20} />
                Inicia con Google
            </CONTENTBUTTON__btn>
        </PRINCIPAL__div> 
    )
}

export default HomePage