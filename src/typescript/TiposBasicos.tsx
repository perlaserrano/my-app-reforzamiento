

export const TiposBasicos = () => {

    const nombre: string  = 'fernando';
    const edad: number = 35;
    const estaActivo: boolean = false

    const poderes:any[] = []; // 'velocidad', 'volar','respirar en el agua'

    poderes.push(1);
    poderes.push('123');
    poderes.push(true);
    

    return (
        <>
            <h3>Tipos basicos</h3>
            {nombre}, {edad}, {(estaActivo) ? 'activo' : 'no activo'}
            <br/>
            {poderes.join(', ') }

        </>
    )
}