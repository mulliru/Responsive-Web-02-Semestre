import { useRouter } from "next/router";
import { useEffect, useState } from "react";


const incluirProduto = () => {
    const router = useRouter();
    const { id } = router.query;

    const [produto,setProduto] = useState({
        titulo : "",
        preco : "",
        quantidade : ""
    });

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");

    useEffect(() =>{
        if (id && id !== "novo"){
            fetch(`http://localhost:8080/appRWD/rest/produto/${id}`)
            .then((res) =>{
                if(res.ok){ 
                    return res.json()
                }else{
                    throw new Error("Erro ao buscar o produto");
                }
            })
            .then((data) =>{
                setProduto(data);
                setLoading(false);
            })
            .catch((error)=>{
                setError("Erro na Busca do Produto");
                setLoading(false);
            })
        }
        else{
            setLoading(false);
        }
    },[id])

    const handleChange = (e) =>{
        setProduto({...produto, [e.target.name]:e.target.value});
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        const method = id && id !== "novo" ? "PUT"  : "POST";
        const url = id && id !== "novo" ? `http://localhost:8080/appRWD/rest/produto/${id}` : `http://localhost:8080/appRWD/rest/produto`

        fetch(url,{
            method,
            headers:{
                "Content-type" : "application/json",
            },
                body: JSON.stringify(produto),
        })
        .then(() =>{
            router.push("/")
        }).catch((err) => {
            console.log("Erro ao salvar o produto", err);
        })
    }

    if(loading){
        return(
            <p>Carregando</p>
        )
    }
    if(error){
        return(
            <p>{error}</p>
        )
    }

    return(
        <>
        <h1>{ id && id !== "novo" ? "Editar Produto" : "Inserir Produto" }</h1>
        <form onSubmit={ handleSubmit }>
            <label htmlFor="titulo">Produto:</label>
            <input type="text" id="titulo" name="titulo" value={produto.titulo} onChange={ handleChange } />
            <br/>
            <label htmlFor="preco">Preço:</label>
            <input type="number" id="preco" name="preco" step="0.01" value={produto.preco} onChange={ handleChange }/>
            <br/>
            <label htmlFor="quantidade">Quantidade:</label>
            <input type="number" id="quantidade" name="quantidade" value={produto.quantidade} onChange={ handleChange } />
            <br/>
            { 
                id && id !== "novo" ? (
                    <button type="submit">Salvar Produto</button>
                ) : (
                    <button type="submit">Incluir Produto</button>
                )
            }
            
        </form>
        </>
    )
}

export default incluirProduto;