import { useState } from "react";

interface FormData {
    nome : string;
    email : string;
}


const Exemplo02 : React.FC = () => {

    const initialFormState : FormData = {
        nome : '', 
        email : '',
    };

    const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]:value,
        })
    }


    const [formData, setFormData] = useState<FormData> (initialFormState);

    return(
        <>
            <h1>Exemplo 02</h1>
            <form>
                <label>
                    <b>Nome: </b>
                    <input type="text" name="nome" value={ formData.nome } onChange={ handleInputChange } />
                </label>
                <br/>
                <label>
                    <b>Email: </b>
                    <input type="email" name="email" value={ formData.email } onChange={ handleInputChange }  />
                </label>
                <br/>
                <input type="submit" value="Enviar" />
            </form>
        </>
    )
}
export default Exemplo02