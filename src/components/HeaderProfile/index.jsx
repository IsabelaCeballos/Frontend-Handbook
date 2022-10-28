import Cookie from 'js-cookie';

import { useEffect, useState } from "react";
import { CONTAINER__div } from './styles';

export const HeaderProfile = () => {
    const [dataUser, setDataUser] = useState();

    useEffect(() => { 
        const getUserDataProfile = async () => {
            const response = await fetch('http://localhost:3001/profile', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + Cookie.get('JWT'),
                }
            });
            const data = await response.json();
            setDataUser(data.result);
        }
        getUserDataProfile();
    },[]);
    return (
        <>
            {
                dataUser ?
                    <CONTAINER__div>
                        <img src={dataUser.photo} alt="User profile image from Google" />
                        <h3>{dataUser.name}</h3>
                    </CONTAINER__div> 
                : <p>Cargando...</p>
            }
        </>
    )
}