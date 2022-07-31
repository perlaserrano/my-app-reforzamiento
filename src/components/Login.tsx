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

type AuthAction = { type: 'logoout' };

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logoout':
            return {
                validando: false,
                token: null,
                nombre: '',
                username: ''

            }

            break;

        default:
            return state;
    }

}


export const Login = () => {
    const [{validando}, dispatch] = useReducer(authReducer, initialState);

    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logoout' });
        }, 1500);
    }, []);

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

            <div className="alert alert-danger">
                no autenticado

            </div>
            <div className="alert alert-success">
                Autenticado

            </div>


            <button className="btn btn-primary"

            >
                Login

            </button>

            <button className="btn btn-danger"

            >
                Logout

            </button>


        </Fragment>
    )
}