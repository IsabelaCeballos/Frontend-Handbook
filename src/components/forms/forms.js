import { useForm } from "react-hook-form";
import Image from 'next/image';

import logoInicio from '../../assets/logo_form.svg';

import { PRINCIPAL__section,
    TEXT__label, 
    DATA__input, 
    DATA__textArea , 
    CONTENTIMAGE__div} from './forms-style.js';

export const Forms = (props) => {
    const {type, action} = props;
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <>
            <CONTENTIMAGE__div><Image src={logoInicio} alt='logo_app' height={100} width={100}/></CONTENTIMAGE__div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                type === "book" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Título del libro</TEXT__label>
                        <DATA__input type="text" placeholder="Titulo del libro"{...register("bookName", { required: true })} />
                        <TEXT__label>Nombre del autor</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre del autor"{...register("autorName", { required: true })} />
                        <TEXT__label>Número de páginas</TEXT__label>
                        <DATA__input type="number" placeholder="Número de páginas"{...register("numberPages", { required: true })} />
                        <TEXT__label>Descripción - sinopsis</TEXT__label>
                        <DATA__textArea {...register("description", { required: true })} />
                        {/*<div>
                            <p>Fotografía del libro</p>
                            <DATA__input type="file" {...register("file", { required: true })} />
                        </div>  */}               
                    </PRINCIPAL__section>      
                :type === "community" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Nombre de la comunidad</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre de la comunidad "{...register("communityName", { required: true })} />
                        <TEXT__label>Descripción</TEXT__label>
                        <DATA__textArea {...register("descriptionCommunity", { required: true })} />
                        <TEXT__label>Ícono de la comunidad</TEXT__label>        
                        <DATA__input type="text" placeholder="Ícono"{...register("icono", { required: true })} />               
                    </PRINCIPAL__section>   
                :type === "event" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Nombre del evento</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre del evento "{...register("eventName", { required: true })} />
                        <TEXT__label>Descripción</TEXT__label>
                        <DATA__textArea {...register("descriptionEvent", { required: true })} />
                        <TEXT__label>Fecha del evento</TEXT__label>
                        <DATA__input type="date" placeholder="Fecha"{...register("date", { required: true })} />
                        <TEXT__label>Ubicación del evento</TEXT__label>
                        <DATA__input type="text" placeholder="Location"{...register("location", { required: true })} />
                        <TEXT__label>Ícono del evento</TEXT__label>        
                        <DATA__input type="text" placeholder="Ícono"{...register("icono", { required: true })} />      
                    </PRINCIPAL__section>   
                :null
                }
            </form>
        </>
    );
}
