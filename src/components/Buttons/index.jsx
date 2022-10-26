import { BUTTON__button, Circle__button} from "./styles";

export const Rectangle__Button = (props) => {
    const {fillColorBtn, width, children} = props;
    return (
        <BUTTON__button fillColorBtn={fillColorBtn} width={width}>{children}</BUTTON__button>
    );
}
export const Circle__Button = (props) => {
    const {fillColorBtn, children} = props;
    return (
        <Circle__button fillColorBtn={fillColorBtn}>{children}</Circle__button>
    );
}