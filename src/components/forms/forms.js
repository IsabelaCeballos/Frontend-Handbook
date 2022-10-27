import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

import Image from 'next/image';
import { RECT__button } from '../Buttons/index.jsx';

import logoInicio from '../../assets/logo_form.svg';

import { PRINCIPAL__section,
    TEXT__label, 
    DATA__input, 
    DATA__textArea , 
    CONTENTIMAGE__div,
    DATA__file,
    ERROR__p,
    CONTENTBUTTON__div} from './forms-style.js';

    const schema = yup.object({
        bookName: yup.string().required("El nombre del libro es obligatorio"),
        autorName: yup.string().required("El nombre del autor es obligatorio"),
        numberPages: yup.number().positive("El número de páginas debe ser positivo")
        .integer("El número de páginas debe ser numérico").required("El número de páginas es obligatorio"),
        communityName:  yup.string().required("El nombre de la comunidad es obligatorio"),
        icono: yup.string().required("El ícono es obligatorio"),
        eventName: yup.string().required("El nombre del evento es obligatorio"),
        date: yup.date().required("La fecha es obligatoria"),
        location: yup.string().required("La ubicación es obligatoria"),
        description: yup.string().max(100, "No debe contener más de 100 caracteres")
        .required("La descripción es obligatoria"),
        descriptionCommunity: yup.string().max(100,"No debe contener más de 100 caracteres")
        .required("La descripción es  obligatoria"),
        descriptionEvent: yup.string().max(100, "No debe contener más de 100 caracteres")
        .required("La descripción es obligatoria"),
    }).required();

export const Forms = (props) => {
    const {type, action} = props;

    const { register, handleSubmit, formState:{ errors }, reset } = useForm({
    resolver: yupResolver(schema)
    });

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
                        <ERROR__p>{errors.bookName?.message}</ERROR__p>
                        
                        <TEXT__label>Nombre del autor</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre del autor"{...register("autorName", { required: true })} />
                        <ERROR__p>{errors.autorName?.message}</ERROR__p>

                        <TEXT__label>Número de páginas</TEXT__label>
                        <DATA__input type="number" placeholder="Número de páginas"{...register("numberPages", { required: true })} />
                        <ERROR__p>{errors.numberPages?.message}</ERROR__p>

                        <TEXT__label>Descripción - sinopsis</TEXT__label>
                        <DATA__textArea {...register("description", { required: true, maxLength: 100 })} />                       
                        <ERROR__p>{errors.description?.message}</ERROR__p>

                        <TEXT__label>Fotografía del libro</TEXT__label>
                        <DATA__file type="file" {...register("file", { required: true })} />     
                        <ERROR__p>{errors.file?.message}</ERROR__p>
                    </PRINCIPAL__section>                   
                :type === "community" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Nombre de la comunidad</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre de la comunidad "{...register("communityName", { required: true })} />
                        <ERROR__p>{errors.communityName?.message}</ERROR__p>

                        <TEXT__label>Descripción</TEXT__label>
                        <DATA__textArea {...register("descriptionCommunity", { required: true, maxLength: 100 })} />
                        <ERROR__p>{errors.descriptionCommunity?.message}</ERROR__p>

                        <TEXT__label>Ícono de la comunidad</TEXT__label>        
                        <DATA__input type="text" placeholder="Ícono"{...register("icono", { required: true })} />
                        <ERROR__p>{errors.icono?.message}</ERROR__p>
                    </PRINCIPAL__section>                     
                :type === "event" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Nombre del evento</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre del evento "{...register("eventName", { required: true })} />
                        <ERROR__p>{errors.eventName?.message}</ERROR__p>
                        
                        <TEXT__label>Descripción</TEXT__label>
                        <DATA__textArea {...register("descriptionEvent", { required: true, maxLength: 100 })} />
                        <ERROR__p>{errors.descriptionEvent?.message}</ERROR__p>

                        <TEXT__label>Fecha del evento</TEXT__label>
                        <DATA__input type="date" placeholder="Fecha"{...register("date", { required: true })} />
                        <ERROR__p>{errors.date?.message}</ERROR__p>
                        
                        <TEXT__label>Ubicación del evento</TEXT__label>
                        <DATA__input type="text" placeholder="Location"{...register("location", { required: true })} />
                        <ERROR__p>{errors.location?.message}</ERROR__p>
                        
                        <TEXT__label>Ícono del evento</TEXT__label>        
                        <DATA__input type="text" placeholder="Ícono"{...register("icono", { required: true })} /> 
                        <ERROR__p>{errors.icono?.message}</ERROR__p>     
                    </PRINCIPAL__section>   
                :null
                }
                <CONTENTBUTTON__div>
                    <RECT__button type="submit" fillColorBtn="Rojo">Publicar</RECT__button>
                </CONTENTBUTTON__div>
            </form>
        </>
    );
}
