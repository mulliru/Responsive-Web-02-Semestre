"use client";
import Link from "next/link";
import Image from "next/image";

import { useEffect, useState } from "react";

const Card = () => {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    // Função para carregar dados do arquivo JSON
    const fetchData = async () => {
      const response = await fetch("/discos.json"); // Carregar arquivo JSON
      const jsonData = await response.json(); // Converter resposta para JSON
      setData(jsonData); // Definir dados no estado
    };

    fetchData(); // Chamar a função de carregamento de dados
  }, []);

  const getRandomElements = (arr: any[], numElements: number) => { 
    //Define uma função chamada getRandomElements que recebe um array e um número de elementos como argumentos e retorna um subconjunto aleatório do array.
    const shuffled = arr.sort(() => 0.5 - Math.random()); 
    // Aqui, estamos usando o método sort() para classificar os elementos do array arr. A função de comparação passada para sort() é uma função de comparação personalizada que é chamada repetidamente para comparar pares de elementos. No entanto, a função de comparação em nosso caso não é típica. Em vez de retornar um número positivo, negativo ou zero para indicar a ordem dos elementos, ela retorna um número aleatório negativo ou positivo, garantindo assim que os elementos sejam classificados aleatoriamente. Isso é alcançado subtraindo Math.random() de 0.5. Como Math.random() retorna um número entre 0 e 1, isso produzirá um número positivo ou negativo com igual probabilidade, resultando na aleatoriedade desejada.
    return shuffled.slice(0, numElements);
    //Aqui, estamos usando o método slice() para retornar uma parte do array shuffled. A função slice() retorna uma cópia rasa de uma parte do array em um novo array. No nosso caso, estamos pegando os primeiros numElements elementos do array, ou seja, numElements elementos aleatórios após a classificação aleatória. Isso nos dá um subconjunto aleatório do array original. Este subconjunto é então retornado pela função.
  };

  const randomData = getRandomElements(data, 8); // Obter 8 elementos aleatórios

  return (
    <>
        <div className="content">
            <div className="content-card">
                {
                    randomData.map((item) => (
                        <div className="card" key={item.id}>
                            <Link href={"Produtos/" + item.slug}>
                              <Image
                                  src={"/imagens/" + item.slug + ".jpg"}
                                  width={100}
                                  height={100}
                                  alt={item.album}
                              ></Image>
                            </Link>
                            <h2>{item.album}</h2>
                            <br/>
                            <h3>{item.banda}</h3>
                        </div>
                    ))
                }
            </div>
        </div>
    </>
  );
};
export default Card;
