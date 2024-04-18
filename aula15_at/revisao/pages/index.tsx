import Link from "next/link";
import React, { useEffect, useState } from "react";

const ProductPage = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Função assíncrona para buscar os produtos
        const fetchProducts = async () => {
            // Chamada da função assíncrona dentro do useEffect,
            // para que a página seja carregada apenas após as informações dos produtos terem sido obtidas.
            try {
                // Faz a requisição para obter os produtos
                const res = await fetch('/api/products.json');
                // Converte a resposta para JSON
                const data = await res.json();
                // Atualiza o estado com os produtos obtidos
                setProducts(data);
            } catch (error) {
                console.error("Erro ao buscar produto", error);
            }
        };

        // Chama a função fetchProducts quando o componente monta
        fetchProducts();
    }, []);

    return (
        <>
            <h1>Produtos</h1>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <Link href={`/product/${product.id}`}>
                            <span>{product.name}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default ProductPage;
