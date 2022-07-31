
interface Persona {
    nombreCompleto: string;
    edad: number;
    direccion: Direccion

}

interface Direccion {
    pais: string;
    casaNo: number;

}






export const ObjetosLiterales = () =>{
const persona:Persona ={
    nombreCompleto:'fernando',
    edad:35,
    direccion:{
        pais:'canada',
        casaNo:615
    }
}


    return(
        <div>
            <h3>Objetos Literales</h3>
            <code>
                <pre>
                    {JSON.stringify( persona, null, 2)}
                </pre>
            </code>
        </div>
    )
}