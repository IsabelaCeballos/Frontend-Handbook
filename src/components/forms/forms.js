import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

import Image from 'next/image';
import { RECT__button } from '../Buttons/index.jsx';

import logoInicio from '../../assets/logo_form.svg';

import { Widget } from "@uploadcare/react-widget";

import Cookie from 'js-cookie';

import {
    PRINCIPAL__section,
    TEXT__label,
    DATA__input,
    DATA__textArea,
    CONTENTIMAGE__div,
    DATA__file,
    ERROR__p,
    CONTENTBUTTON__div,
    CONTENTFILE__div,
    CONTENTTITLE__p,
    TEXT__p,
    CONTENTFILEFLEX__div
} from './forms-style.js';

/** ALERTS */
import Swal from 'sweetalert2';

export const Forms = (props) => {

    const [urlImage, setUrlImage] = useState();

    const { type, action, dataElement } = props;
    // console.log(type)
    const router = useRouter();

    const prueba = (ev) => {
        setUrlImage(ev.originalUrl);
    }

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if (type === "book") {
            let dataBook = { 
                ...data,
                photo: urlImage,
                state: "Disponible" }

            try {
                const response = await fetch(`http://localhost:3001/${action === "edit" ? "bibliographic_material/" + dataElement._id : "new_bibliographic_material"}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: action === "edit" ? "PUT" : "POST",
                    body: JSON.stringify(dataBook)
                })
                const responseJson = await response.json();
            } catch (error) {
                console.error(error);
            }
            Swal.fire({
                icon: "success",
                title: `Tú libro se ha ${action === "edit" ? "actualizado" : "publicado"} correctamente`,
                iconColor: '#75C0AA',
                confirmButtonColor: '#75C0AA',
                confirmButtonText: 'OK',
                width: 400,
            })
            router.push('/home');
        } else if (type == "community") {
            try {
                const response = await fetch(`http://localhost:3001/${action === "edit" ? "community/" + dataElement._id : "new_community"}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: action === "edit" ? "PUT" : "POST",
                    body: JSON.stringify(data)
                })
                const responseJson = await response.json();
                // console.log(data);
                // console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
            Swal.fire({
                icon: "success",
                title: `La comunidad se ha ${action === "edit" ? "actualizado" : "publicado"} exitosamente`,
                iconColor: '#75C0AA',
                confirmButtonColor: '#75C0AA',
                confirmButtonText: 'OK',
                width: 400,
            })
            router.push('/home');
        } else {
            try {
                const response = await fetch(`http://localhost:3001/${action === "edit" ? "event/" + dataElement._id : "new_event"}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: action === "edit" ? "PUT" : "POST",
                    body: JSON.stringify(data)
                })
                const responseJson = await response.json();
                // console.log(data);
                // console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
            Swal.fire({
                icon: "success",
                title: `El evento se ha ${action === "edit" ? "actualizado" : "publicado"} exitosamente`,
                iconColor: '#75C0AA',
                confirmButtonColor: '#75C0AA',
                confirmButtonText: 'OK',
                width: 400,
            })
            router.push('/home');
        }
    };

    return (
        <>
            <CONTENTIMAGE__div><Image src={logoInicio} alt='logo_app' height={100} width={100} /></CONTENTIMAGE__div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {
                    type === "book" ?
                        <PRINCIPAL__section>
                            <TEXT__label>Título del libro</TEXT__label>
                            <DATA__input defaultValue={dataElement ? dataElement.name : null} type="text" placeholder="Titulo del libro"{...register("name", { required: true })} />
                            {errors.name ? <ERROR__p>El nombre del libro es obligatorio</ERROR__p> : null}

                            <TEXT__label>Nombre del autor</TEXT__label>
                            <DATA__input defaultValue={dataElement ? dataElement.author : null} type="text" placeholder="Nombre del autor"{...register("author", { required: true })} />
                            {errors.author ? <ERROR__p>El nombre del autor es obligatorio</ERROR__p> : null}

                            <TEXT__label>Número de páginas</TEXT__label>
                            <DATA__input defaultValue={dataElement ? dataElement.pages : null} type="number" placeholder="Número de páginas"{...register("pages", { required: true, pattern: /^[1-9]\d*$/i })} />
                            {errors.pages?.type == 'required' && <ERROR__p>El número de páginas es obligatorio</ERROR__p>}
                            {errors.pages?.type == 'pattern' && <ERROR__p>No se permiten números negativos</ERROR__p>}

                            <TEXT__label>Descripción - sinopsis</TEXT__label>
                            <DATA__textArea defaultValue={dataElement ? dataElement.description : null}  {...register("description", { required: true, maxLength: 200 })} />
                            {errors.description?.type == 'required' && <ERROR__p>La descripción del libro es obligatoria</ERROR__p>}
                            {errors.description?.type == 'maxLength' && <ERROR__p>La descripción no debe contener más de 200 caracteres</ERROR__p>}

                            <CONTENTFILE__div>
                                <TEXT__label>Fotografía del libro</TEXT__label>
                                <Widget 
                                    publicKey="3a4fb1e5a73b7648e428"
                                    tabs="file camera url facebook gdrive gphotos"
                                    onChange={prueba}
                                    />
                            </CONTENTFILE__div>

                        </PRINCIPAL__section>
                        : type === "community" ?
                            <PRINCIPAL__section>
                                <TEXT__label>Nombre de la comunidad</TEXT__label>
                                <DATA__input defaultValue={dataElement ? dataElement.name : null} type="text" placeholder="Nombre de la comunidad "{...register("name", { required: true })} />
                                {errors.name ? <ERROR__p>El nombre de la comunidad es obligatorio</ERROR__p> : null}

                                <TEXT__label>Descripción</TEXT__label>
                                <DATA__textArea defaultValue={dataElement ? dataElement.description : null} {...register("description", { required: true, maxLength: 200 })} />
                                {errors.description?.type == 'required' && <ERROR__p>La descripción de la comunidad es obligatoria</ERROR__p>}
                                {errors.description?.type == 'maxLength' && <ERROR__p>La descripción no debe contener más de 200 caracteres</ERROR__p>}

                                <TEXT__label>Ícono de la comunidad</TEXT__label>
                                <DATA__input defaultValue={dataElement ? dataElement.icon : null} type="text" placeholder="Ícono"{...register("icon", { required: true })} />
                                {errors.icon ? <ERROR__p>El ícono de la comunidad es obligatorio</ERROR__p> : null}

                            </PRINCIPAL__section>
                            : type === "event" ?
                                <PRINCIPAL__section>
                                    <TEXT__label>Nombre del evento</TEXT__label>
                                    <DATA__input defaultValue={dataElement ? dataElement.name : null} type="text" placeholder="Nombre del evento "{...register("name", { required: true })} />
                                    {errors.name ? <ERROR__p>El nombre del evento es obligatorio</ERROR__p> : null}

                                    <TEXT__label>Descripción</TEXT__label>
                                    <DATA__textArea defaultValue={dataElement ? dataElement.description : null} {...register("description", { required: true, maxLength: 200 })} />
                                    {errors.description?.type == 'required' && <ERROR__p>La descripción del evento es obligatoria</ERROR__p>}
                                    {errors.description?.type == 'maxLength' && <ERROR__p>La descripción no debe contener más de 200 caracteres</ERROR__p>}

                                    <TEXT__label>Fecha del evento</TEXT__label>
                                    <DATA__input defaultValue={dataElement ? dataElement.date : null} type="date" placeholder="Fecha"{...register("date", { required: true })} />
                                    {errors.date ? <ERROR__p>La fecha del evento es obligatoria</ERROR__p> : null}

                                    <TEXT__label>Ubicación del evento</TEXT__label>
                                    <DATA__input defaultValue={dataElement ? dataElement.location : null} type="text" placeholder="Location"{...register("location", { required: true })} />
                                    {errors.location ? <ERROR__p>La ubicación del evento es obligatoria</ERROR__p> : null}

                                    <TEXT__label>Ícono del evento</TEXT__label>
                                    <DATA__input defaultValue={dataElement ? dataElement.icon : null} type="text" placeholder="Ícono"{...register("icon", { required: true })} />
                                    {errors.icon ? <ERROR__p>El ícono del evento es obligatoria</ERROR__p> : null}
                                </PRINCIPAL__section>
                                : null
                }
                <CONTENTBUTTON__div>
                    <RECT__button type="submit" fillColorBtn="Rojo">{action === "edit" ? "Actualizar" : "Publicar"}</RECT__button>
                </CONTENTBUTTON__div>
            </form>
        </>
    );
}
