import { useEffect, useState } from "react";

const Exemplo02 = () => {
    
    const[usuario, setUsuario] = useState([]);
    const[loading,setLoading] = useState(false);

    useEffect( ()=>{
        const fetchData = async() =>{
            if(loading){
                try{
                    const response = await fetch('https://jsonplaceholder.typicode.com/users');
                    const data = await response.json();
                    setUsuario(data);
                } catch(error){
                    console.log("Deu erro:", error);
                } finally{
                    setLoading(false)
                }
            }
        }
        fetchData();
    },[loading]);

    const carregarDados = () =>{
        setLoading(true)
    };
    return(
        <>
            <h1>Exemplo 02</h1>
            { loading ? (
                <div>Carregando...</div>
            ):(
            <div>
                <ul>
                    {
                        usuario.map((usuario)=>(
                            <li key={ usuario.id }>{ usuario.name }</li>
                        ))
                    }
                </ul>
            </div>
            )}
            <button onClick={ carregarDados }>Carregar Dados</button>
        </>
    )
}
export default Exemplo02;