import { type } from "@testing-library/user-event/dist/type";
import React, { Fragment, useEffect, useReducer } from "react";

interface AuthState {
    validando: boolean;
    token: string | null;
    username: string;
    nombre: string

}

const initialState: AuthState = {
    validando: true,
    token: null,
    username: '',
    nombre: ''
}

type LoginPayload = {
    username: string;
    nombre: string;
}

type AuthAction =
    | { type: 'logoout'}
    | { type: 'login', payloaad: LoginPayload};



const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logoout':
            
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''

            }

            case 'login':
                const {nombre, username} = action.payloaad;
                return{
                    validando: false,
                    token: 'ABC123',
                    nombre,
                    username
                }

            break;

        default:
            return state;
    }

}


export const Login = () => {
    const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logoout' });
        }, 1500);
    }, []);

    const login =() => {
        dispatch({
            type: 'login',
            payloaad:{
                nombre:'Perla',
                username:'Serrano'
            }
        })
    }

    
    const logoout =() => {
        dispatch({ type: 'logoout'}); 
    }

    if (validando) {
        return (
            <Fragment>
                <h3>Login</h3>

                <div className="alert alert-info">
                    Validando.......

                </div>


            </Fragment>
        )
    }



    return (
        <Fragment>

            {
                (token)
                    ? <div className="alert alert-success"> Autenticado como: {nombre}</div>
                    : <div className="alert alert-danger">no autenticado </div>


            }

            {
                (token)
                    ? (
                        <button 
                        className="btn btn-danger"
                        onClick={logoout}

                        >
                            Logout

                        </button>


                    )
                    :(
                        
            <button 
            className="btn btn-primary"
            onClick={login}

            >
                Login

            </button>


                    )
            }






        </Fragment>
    )
}