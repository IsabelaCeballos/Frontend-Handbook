import { useForm } from "react-hook-form";

import Image from 'next/image';
import { RECT__button } from '../Buttons/index.jsx';

import logoInicio from '../../assets/logo_form.svg';

import Cookie from 'js-cookie';

import { PRINCIPAL__section,
    TEXT__label, 
    DATA__input, 
    DATA__textArea , 
    CONTENTIMAGE__div,
    DATA__file,
    ERROR__p,
    CONTENTBUTTON__div} from './forms-style.js';

/** ALERTS */
import Swal from 'sweetalert2';

export const Forms = (props) => {
    const {type, action, dataElement} = props;
    console.log(type)

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        if(type === "book"){
            try {
                const response = await fetch(`http://localhost:3001/${action === "edit" ? "bibliographic_material/"+dataElement._id:"new_bibliographic_material"}`,{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: action === "edit"?"PUT":"POST",
                    body: JSON.stringify(data)
                })
                const responseJson = await response.json();
                console.log(data);
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
            Swal.fire({
                icon: "success",
                title: `Tú libro se ha ${action==="edit"?"actualizado":"publicado"} correctamente`,
                iconColor: '#FF8594',
                confirmButtonColor: '#FF8594',
                confirmButtonText: 'OK',
                width: 400,
            })
        }else if( type == "community"){
            try {
                const response = await fetch('http://localhost:3001/new_community',{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                const responseJson = await response.json();
                console.log(data);
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
            Swal.fire({
                icon: "success",
                title: 'La comunidad se ha creado exitosamente',
                iconColor: '#FF8594',
                confirmButtonColor: '#FF8594',
                confirmButtonText: 'OK',
                width: 400,
            })
        }else{
            try {
                const response = await fetch('http://localhost:3001/new_event',{
                    headers:{
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    },
                    method: 'POST',
                    body: JSON.stringify(data)
                })
                const responseJson = await response.json();
                console.log(data);
                console.log(responseJson);
            } catch (error) {
                console.error(error);
            }
            Swal.fire({
                icon: "success",
                title: 'El evento se ha creado exitosamente',
                iconColor: '#FF8594',
                confirmButtonColor: '#FF8594',
                confirmButtonText: 'OK',
                width: 400,
            })
        }
    };

    return (
        <>
            <CONTENTIMAGE__div><Image src={logoInicio} alt='logo_app' height={100} width={100}/></CONTENTIMAGE__div>
            <form onSubmit={handleSubmit(onSubmit)}> 
                {
                type === "book" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Título del libro</TEXT__label>
                        <DATA__input defaultValue={dataElement?dataElement.name:null} type="text" placeholder="Titulo del libro"{...register("name", { required: true })} />
                        {errors.name?<ERROR__p>El nombre del libro es obligatorio</ERROR__p>:null}
                        
                        <TEXT__label>Nombre del autor</TEXT__label>
                        <DATA__input defaultValue={dataElement?dataElement.author:null}  type="text" placeholder="Nombre del autor"{...register("author", { required: true })} />
                        {errors.author?<ERROR__p>El nombre del autor es obligatorio</ERROR__p>:null}

                        <TEXT__label>Número de páginas</TEXT__label>
                        <DATA__input defaultValue={dataElement?dataElement.pages:null}  type="number" placeholder="Número de páginas"{...register("pages", { required: true, pattern: /^[1-9]\d*$/i })} />
                        {errors.pages?.type == 'required' && <ERROR__p>El número de páginas es obligatorio</ERROR__p>}
                        {errors.pages?.type == 'pattern' && <ERROR__p>No se permiten números negativos</ERROR__p>}

                        <TEXT__label>Descripción - sinopsis</TEXT__label>
                        <DATA__textArea defaultValue={dataElement?dataElement.description:null}  {...register("description", { required: true, maxLength: 200 })} />                       
                        {errors.description?.type == 'required' && <ERROR__p>La descripción del libro es obligatoria</ERROR__p>}
                        {errors.description?.type == 'maxLength' && <ERROR__p>La descripción no debe contener más de 200 caracteres</ERROR__p>}

                        <TEXT__label>Url de la fotografía del libro</TEXT__label>
                        <DATA__input defaultValue={dataElement?dataElement.photo:null}  type="text" {...register("photo", { required: true })} />     
                        {errors.photo?<ERROR__p>La fotografía del libro es obligatoria</ERROR__p>:null}
                    </PRINCIPAL__section>                   
                :type === "community" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Nombre de la comunidad</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre de la comunidad "{...register("name", { required: true })} />
                        {errors.communityName?<ERROR__p>El nombre de la comunidad es obligatorio</ERROR__p>:null}

                        <TEXT__label>Descripción</TEXT__label>
                        <DATA__textArea {...register("description", { required:true, maxLength: 200 })} />
                        {errors.descriptionCommunity?.type == 'required' && <ERROR__p>La descripción de la comunidad es obligatoria</ERROR__p>}
                        {errors.descriptionCommunity?.type == 'maxLength' && <ERROR__p>La descripción no debe contener más de 200 caracteres</ERROR__p>}

                        <TEXT__label>Ícono de la comunidad</TEXT__label>        
                        <DATA__input type="text" placeholder="Ícono"{...register("icon", { required: true })} />
                        {errors.icono?<ERROR__p>El ícono de la comunidad es obligatorio</ERROR__p>:null}

                    </PRINCIPAL__section>                     
                :type === "event" ?
                    <PRINCIPAL__section>
                        <TEXT__label>Nombre del evento</TEXT__label>
                        <DATA__input type="text" placeholder="Nombre del evento "{...register("name", { required: true })} />
                        {errors.eventName?<ERROR__p>El nombre del evento es obligatorio</ERROR__p>:null}
                        
                        <TEXT__label>Descripción</TEXT__label>
                        <DATA__textArea {...register("description", {required: true, maxLength: 200 })} />
                        {errors.descriptionEvent?.type == 'required' && <ERROR__p>La descripción del evento es obligatoria</ERROR__p>}
                        {errors.descriptionEvent?.type == 'maxLength' && <ERROR__p>La descripción no debe contener más de 200 caracteres</ERROR__p>}

                        <TEXT__label>Fecha del evento</TEXT__label>
                        <DATA__input type="date" placeholder="Fecha"{...register("date", { required: true })} />
                        {errors.date?<ERROR__p>La fecha del evento es obligatoria</ERROR__p>:null}
                        
                        <TEXT__label>Ubicación del evento</TEXT__label>
                        <DATA__input type="text" placeholder="Location"{...register("location", { required: true })} />
                        {errors.location?<ERROR__p>La ubicación del evento es obligatoria</ERROR__p>:null}
                        
                        <TEXT__label>Ícono del evento</TEXT__label>        
                        <DATA__input type="text" placeholder="Ícono"{...register("icon", { required: true })} /> 
                        {errors.icono?<ERROR__p>El ícono del evento es obligatoria</ERROR__p>:null}
                    </PRINCIPAL__section>   
                :null
                }
                <CONTENTBUTTON__div>
                    <RECT__button type="submit" fillColorBtn="Rojo">{action==="edit"?"Actualizar": "Publicar"}</RECT__button>
                </CONTENTBUTTON__div>
            </form>
        </>
    );
}
