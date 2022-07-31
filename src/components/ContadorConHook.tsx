import React, { Fragment } from "react";
import { useCounter } from "../hook/useCounter";

export const ContadorConHook = () => {
  const { valor, acumular} = useCounter(100);

    return (
        <Fragment>
            <h3>ContadorConHook: <small>{valor}</small></h3>
            <button className="btn btn-primary"
                onClick={() => acumular(1)}
            >
                +1

            </button>
            &nbsp;
            <button className="btn btn-primary"
                onClick={() => acumular(-1)}

            >
                -1

            </button>
        </Fragment>
    )
}