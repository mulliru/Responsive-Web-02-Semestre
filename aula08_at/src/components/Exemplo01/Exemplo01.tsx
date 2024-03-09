import { useEffect, useState } from "react";

import './exemplo01.css'

const Exemplo01 = () => {

    const [janela,setJanela] = useState({
        largura : window.innerWidth ,  
        altura  : window.innerHeight
    });

    useEffect(() => {
        const handleResize = ()=>{
            setJanela({
                largura : window.innerWidth , 
                altura  : window.innerHeight
            })
        }
        // Adiciona o evento de redimensionamento da janela no escopo do componente
        window.addEventListener('resize', handleResize);
        return() => {
            // Remove o evento quando o component é desmontado
            window.removeEventListener('resize', handleResize)
        }
    },[]);// Sem segundo parametro, a função será executada toda vez que o valor das dependências mudar. Com ele vazio, só executa apenas uma vez, na montagem do componente

    return(
        <>
            <div className="exemplo01">
                <h1>Exemplo 01</h1>
                <p><b>Largura: </b> { janela.largura }px</p>
                <p><b>Altura: </b> { janela.altura }px</p>
            </div>
        </>
    )
}

export default Exemplo01;