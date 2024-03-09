import React, { useState } from 'react';

const ExampleComponent2 : React.FC = () =>{

    const [texto,setTexto] = useState('');
    const [texto1,setTexto1] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTexto(event.target.value)
    }
    const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTexto1(event.target.value)
    }
    
    return (
        <>
            <p><b>Digite um texto: </b><input type="text" onBlur={ handleChange } /></p>
            <p><b>Conteúdo digitado: </b>{ texto }</p>
            <p><b>Digite um texto: </b><input type="text"  onBlur={ handleChange1 } /></p>
            <p><b>Conteúdo digitado: </b>{ texto1 }</p>
        </>
    )
}
export default ExampleComponent2