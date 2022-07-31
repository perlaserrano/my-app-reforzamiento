import { Fragment } from "react"

export const Funciones = () =>{

    const sumar = (a:number, b:number):number =>{
        return a + b;
    }


    return(
        <Fragment>
            <h3>Funciones</h3>
          <span>El resultado es: {sumar(10, 5)}</span>  
        </Fragment>
    )
}