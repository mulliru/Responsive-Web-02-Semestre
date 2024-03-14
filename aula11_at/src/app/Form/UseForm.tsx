import { useState } from "react";

interface UserData{
    nome : string;
    email : string;
    idade : number;
}

interface UserFormProps {
    onSubmit : (userData : UserData) => void;
}

const UseForm : React.FC<UserFormProps> = ({ onSubmit }) =>{

    const [nome,setNome] = useState<string>("");
    const [email,setEmail] = useState<string>("");
    const [idade,setIdade] = useState<number | string>("");

    const handleSubmit = ( event : React.FormEvent ) => {
        event.preventDefault();

        const idadeNumber = typeof idade === 'number' ? idade : parseInt(idade as string, 10); 

        const userData : UserData ={
            nome,
            email,
            idade: idadeNumber,
        }
        onSubmit(userData);

        setNome("");
        setEmail("");
        setIdade("");
    }


    return(
        <>
            <h1>Use Form</h1>
            <form onSubmit={ handleSubmit }>
                <label>
                    <b>Nome: </b>
                    <input type="text" value={ nome } onChange={ (e) => setNome(e.target.value) } />
                </label>
                <br />
                <label>
                    <b>E-Mail: </b>
                    <input type="email" value={ email } onChange={ (e) => setEmail(e.target.value) } />
                </label>
                <br />
                <label>
                    <b>Idade: </b>
                    <input type="number" value={ idade } onChange={ (e) => setIdade(e.target.value) } />
                </label>
                <br />
                <button type="submit">Cadastrar</button>
            </form>
        </>
    )
}
export default UseForm;