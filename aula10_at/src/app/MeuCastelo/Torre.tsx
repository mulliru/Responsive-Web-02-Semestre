import React from "react";

interface TorreProps{
    altura : number;
    cor : string;
    janelas : boolean;
}


const Torre : React.FC<TorreProps> = ( props ) => {
    return(
        <>
            <h1> Meu Castelo</h1>
            <p><b>Altura: </b>{props.altura}</p>
            <p><b>cor: </b>{props.cor}</p>
            <p><b>possui janelas?: </b>{props.janelas ? 'Sim' : 'Não'}</p>
        </>
    )
}
export default Torre;