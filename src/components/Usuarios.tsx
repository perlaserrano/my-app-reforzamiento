import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const Usuarios = () => {
    const [Usuario, setUsuarios] = useState<Usuario[]>([])
    useEffect( () => {
        // llamado de API
  

        reqResApi.get<ReqResListado>('/users')
          .then( resp => {
            setUsuarios(resp.data.data)
          })
          .catch(console.log);
    }, [] )

    const renderItem = ({id, first_name, last_name, email, avatar}: Usuario) =>{
        return (
            <tr key={id.toString()}>
            <td>
                <img src={avatar} 
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
            >
                Siguientes
            </button>
        </Fragment>
    )
}