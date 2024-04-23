"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaEdit as Edit, FaTrash as Delete } from "react-icons/fa";

const DivLista = styled.div`
  width:70%;
  margin:auto;
  font-family: Arial;
  h1{
    text-align:center
  }
  table, tbody{
    width: 100%;
    margin: auto;
  }
  thead tr{
    background:darkblue;
    color: white;
  }
  thead tr th{
    padding: 10px;
  }
  tbody tr:nth-child(2n+2){
    background:#ccc;
    height:30px;
  }
  tbody tr td{
    padding:5px;
  }
  tbody tr td a, tbody tr td button, button{
    background: none;
    border:none;
    color: red
  }
button{
  color: white;
}
  a{
    text-decoration:none;
    padding: 10px 15px;
    background: yellowgreen;
    display:inline-block;
    
  }
`
const Home : React.FC = () => {

  const [produtos,setProdutos] = useState([]);

  useEffect(() =>{
    fetch("http://localhost:8080/appRWD/rest/produto")
    .then((resp) => resp.json())
    .then((resp) =>{
      setProdutos(resp);
    })
    .catch((error) =>{
      console.log(error);
    })
  },[])

  const handleDelete = (id) =>{
    fetch("http://localhost:8080/appRWD/rest/produto/" + id,{
      method : "delete"
    })
    .then(() =>{
      window.location.reload();
    })
    .catch((error) =>{
      console.log(error);
    })
  }

  return (
    <>
      <DivLista>
        <h1>Lista de Produtos</h1>
        <Link href="/produto/novo">
          <button>Inserir Produto</button>
        </Link>
        <table>
          <thead>
            <tr>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Ação</th>
            </tr>
          </thead>
          <tbody>
            {
              produtos.map((produto) =>(
                <tr key={ produto.codigo }>
                  <td>{ produto.titulo }</td>
                  <td>{ produto.preco }</td>
                  <td>{ produto.quantidade }</td>
                  <td>
                    <Link href="/produto/[id]" as={`/produto/${ produto.codigo }`}>
                      <button>
                        <Edit />
                      </button>
                    </Link>
                    <button title="Excluir" onClick={ () => handleDelete(produto.codigo) }><Delete /></button>
                  </td>
                </tr>
              ))
            }
          </tbody>

        </table>
      </DivLista>
    </>
  );
}
export default Home;