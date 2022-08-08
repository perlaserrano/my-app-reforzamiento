import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";


export const useUsuarios = () => {

    const [Usuario, setUsuarios] = useState<Usuario[]>([]);
    const paginaRef = useRef(1);;

    useEffect(() => {
        // llamado de API

        cargarUsuarios();
    }, []);




    const cargarUsuarios = async () => {
        const resp = await reqResApi.get<ReqResListado>('/users', {
            params: {
                page: paginaRef.current
            }
        })

        if (resp.data.data.length > 0) {
            setUsuarios(resp.data.data);


        } else {
            paginaRef.current--;
            alert('No hay mas registros');
        }


    }

    const paginaSiguiente = () => {
        paginaRef.current++;
        cargarUsuarios();


    }

    const paginaAnterior = () => {
        if (paginaRef.current > 1) {
            paginaRef.current--;
            cargarUsuarios();
        }
    }


    return {
        Usuario,
        paginaSiguiente,
        paginaAnterior,
    }
}


