import { Menu } from '../../src/components/Menu';
import { Header } from '../../src/components/Header';

import { HappyFaceIcon } from '../../src/assets/HappyFace';
import { AirplaneIcon } from '../../src/assets/Airplane';
import { EditIcon } from '../../src/assets/Edit';
import { DeleteIcon } from '../../src/assets/Delete';

import { RECT__button, 
    CIRC__button} 
from '../../src/components/Buttons/index';

export default function Profile() {
    return (
        <>
            <Header />
            <Menu />
            <p>Hola desde perfil</p>

            <RECT__button fillColorBtn="Rojo">Salir</RECT__button>
            <RECT__button fillColorBtn="Verde" width="12rem">Crear comunidad</RECT__button>
            <RECT__button fillColorBtn="Pancho">Enviar reseña</RECT__button>
            <CIRC__button fillColorBtn="Blanco">
                <HappyFaceIcon/>
            </CIRC__button>
            <CIRC__button fillColorBtn="#488674">
                <AirplaneIcon/>
            </CIRC__button>
            <CIRC__button fillColorBtn="Rojo">
                <DeleteIcon/>
            </CIRC__button>
            <CIRC__button fillColorBtn="Pancho">
                <EditIcon/>
            </CIRC__button>
        </>
    )
}