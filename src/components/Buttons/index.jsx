/*Syled Components */
import { 
    RECTANGLE__button, 
    CIRCLE__button, 
    SIDE__button, 
    CONTINER_SIDE_LEFT,
    CONTINER_SIDE_RIGHT
} from "./styles";

/*Assets */
import { SideFillDislike } from "../../assets/SideFillDislike";
import { SideFillLike } from "../../assets/SideFillLike";
import { EquisIcon } from "../../assets/EquisIcon";
import { HeartIcon } from "../../assets/HeartIcon";

export const RECT__button = (props) => {
    /* Ejemplo de uso:
        Usando el ancho por default
        <RECT__button fillColorBtn="Rojo">Ya recibí mi libro</RECT__button>

        Usando un ancho especifico
        <RECT__button fillColorBtn="Verde" width="12rem">Crear comunidad</RECT__button>
    */
    const {fillColorBtn, width, children} = props;
    return (
        <RECTANGLE__button fillColorBtn={fillColorBtn} width={width}>{children}</RECTANGLE__button>
    );
}
export const CIRC__button = (props) => {
    /* Ejemplo de uso: 
        Usando un color de las variables globales
        <CIRC__button fillColorBtn="Blanco">
            <HappyFaceIcon/>
        </CIRC__button>

        Usando un color que no existe en las variables globales
        <CIRC__button fillColorBtn="#488674">
            <AirplaneIcon/>
        </CIRC__button>
    */
    const {fillColorBtn, children} = props;
    return (
        <CIRCLE__button fillColorBtn={fillColorBtn}>{children}</CIRCLE__button>
    );
}
export const LEFT_SIDE__section = (props) => {
    return (
        <CONTINER_SIDE_LEFT>
            <SideFillDislike />
            <SIDE__button onClick={() => props.handler()}>
                <EquisIcon width="22px" height="23px"/>
            </SIDE__button>
        </CONTINER_SIDE_LEFT>
    )
}
export const RIGHT_SIDE__section = (props) => {
    return (
        <CONTINER_SIDE_RIGHT>
            <SideFillLike />
            <SIDE__button onClick={() => props.handler()}>
                <HeartIcon />
            </SIDE__button>
        </CONTINER_SIDE_RIGHT>
    )
}