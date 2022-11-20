import Cookie from 'js-cookie';
import { useEffect, useState } from "react";

import Head from 'next/head';
import { useRouter } from 'next/router';
import { Header } from '../../src/components/Header';
import { Menu } from '../../src/components/Menu';
import { Footer } from "../../src/components/Footer"
import { Forms } from '../../src/components/forms/forms';

export default function Review() {
    const paramsRouter = useRouter().query.id;
    console.log("primer console",paramsRouter);
    let idElement="", typeElement="";
    const [dataElement, setDataElement] = useState(null);

    useEffect(() => { 
        if (paramsRouter) {
            idElement = paramsRouter.split("_")[0];
            typeElement = paramsRouter.split("_")[1];
            console.log("type->",typeElement)

            const getBookData = async () => {
                const response = await fetch(`http://localhost:3001/${typeElement==="book"?"bibliographic_material":typeElement==="community"?"community":"event"}/${idElement}`, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + Cookie.get('JWT'),
                    }
                });
                const data = await response.json();
                setDataElement({data:data.result, type:typeElement});
            }
            getBookData();
        }
  
    },[paramsRouter]);

    return (
        <>
            <Head><title>Editar</title></Head>
            <Header />
            <Menu />
            {
                dataElement ? 
                // console.log("cuando hay data->",dataElement)
                    <Forms type={dataElement.type} action="edit" dataElement = {dataElement.data} />
                :<p>Cargando...</p>
            }
            <Footer />
        </>
    )
}