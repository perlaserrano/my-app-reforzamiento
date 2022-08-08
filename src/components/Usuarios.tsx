import React, { Fragment, useEffect, useRef, useState } from "react";
import axios from "axios";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";
import { useUsuarios } from "../hook/useUsuarios";

export const Usuarios = () => {
    const {Usuario , paginaAnterior, paginaSiguiente} = useUsuarios();
    

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) =>{
        return (
            <tr key={id.toString()}>
            <td>
                <img 
                    src={avatar} 
                    alt={first_name} 
                    style={{
                        width:35,
                        borderRadius:100
                    }}
                />
            </td>
            <td>{first_name} {last_name}</td>
            <td>{email}</td>

            </tr>
        )

    }
    return (
        <Fragment>
            <h3>Usuarios:</h3>
            <table className="table">
                <thead>
                    <tr>
                        <th>Avatar</th>
                        <th>Nombre</th>
                        <th>email</th>

                    </tr>

                </thead>
                <tbody>
                    {
                        Usuario.map( renderItem)
                    }

                </tbody>
            </table>

            <button
              className="btn btn-primary"
              onClick={paginaAnterior}
            >
              Anteriores
            </button>

            &nbsp;

            <button
              className="btn btn-primary"
              onClick={paginaSiguiente}
            >
                Siguientes
            </button>
        </Fragment>
    )


}
            
