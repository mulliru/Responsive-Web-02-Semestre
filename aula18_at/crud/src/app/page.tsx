
"use client";
import Link from "next/link";
import { useEffect, useState } from "react";


export default function Home() {

  const [produtos,setprodutos] = useState([])

  useEffect(() => {
    fetch(`http://localhost:8080/appRWD/produtos`)
    .then((resp) => resp.json())
    .then((resp) => {
       setprodutos(resp);
 
    })
    .catch((error) => {
       console.log(error);
     })
  })

  return (
    <>
      <h1>Lista de Produtos</h1>
      <ul>
        {
        produtos.map((produto) => (
          <li key={produto.codigo}>
            <Link href="/produto/id" as={`/produto`${produto.codigo}`{}` }
          </li>
        ))
      }
      </ul>
    </>
  );
}