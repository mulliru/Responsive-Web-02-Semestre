"use client";
import discos from "../../../../public/discos.json"
import Image from "next/image";

const Info = ({ params }) => {
    
    const disco = discos.find((disco) => disco.slug === params.produtosID);

    if (!disco) {
        return (
            <>
                <div className="content">
                    <h1>Disco não encontrado</h1>
                </div>
            </>
        )
    }

    return (
        <div className="content">
            <div className="product-container">
                <Image
                    src={"/imagens/" + disco.slug + ".jpg"}
                    width={100}
                    height={100}
                    alt={disco.album}
                ></Image>
                <h1>{disco.album}</h1>
                <h2>{disco.banda}</h2>
                <p>{disco.descricao}</p>
            </div>
        </div>
    );
}

export default Info;
