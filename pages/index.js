import { HOLA__div, TEXT__p} from './estilos.js';
import { Rectangle__Button, Circle__Button } from '../src/components/Buttons/index.jsx';
import { HappyFaceIcon } from '../src/assets/HappyFace';
import { AirplaneIcon } from '../src/assets/Airplane';
import { EditIcon } from '../src/assets/Edit';
import { DeleteIcon } from '../src/assets/Delete';

function HomePage() {
    return(
        <>
            <HOLA__div>HandBook</HOLA__div>
            <TEXT__p>esto es text</TEXT__p>
            <Rectangle__Button fillColorBtn="Rojo">Salir</Rectangle__Button>
            <Rectangle__Button fillColorBtn="Verde">Unirse</Rectangle__Button>
            <Rectangle__Button fillColorBtn="Pancho">Publicar libro</Rectangle__Button>
            <Rectangle__Button fillColorBtn="Rojo">Ya recibí mi libro</Rectangle__Button>
            <Rectangle__Button fillColorBtn="Verde" width="12rem">Crear comunidad</Rectangle__Button>
            <Rectangle__Button fillColorBtn="Pancho">Enviar reseña</Rectangle__Button>
            <Circle__Button fillColorBtn="Blanco">
                <HappyFaceIcon/>
            </Circle__Button>
            <Circle__Button fillColorBtn="#488674">
                <AirplaneIcon/>
            </Circle__Button>
            <Circle__Button fillColorBtn="Rojo">
                <DeleteIcon/>
            </Circle__Button>
            <Circle__Button fillColorBtn="Pancho">
                <EditIcon/>
            </Circle__Button>
        </> 
    )
}

export default HomePage