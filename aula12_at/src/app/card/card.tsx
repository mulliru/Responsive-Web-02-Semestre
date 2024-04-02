
import Link from "next/link";
import Image from "next/image";
import produtos from "./produtos.json"

interface Dados{
    id : number;
    nome : string;
    preco : number;
    descricao : string;
    slug : string;
    imagem : string;
}

const Card = () =>{
    return(
        <>
            <div className="content">
                <div className="content-card">
                    {produtos.map((produto : Dados) => (
                        <div className="card" key={ produto.id}>
                            <h2>{ produto.nome }</h2>
                            <p>R$ { produto.preco }</p>
                            <p>{ produto.descricao }</p>
                            <p><Link href={ "Produtos/" + produto.slug }>{ produto.nome }</Link></p>
                            <Image src= {produto.imagem} width={100} height={100} alt="teste" ></Image>
                        </div>
                    ))}                
                </div>
            </div>
        </>
    )
}
export default Card;