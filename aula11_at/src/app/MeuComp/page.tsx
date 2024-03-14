
interface MeuCompProps{
    texto : string;
}

const MeuComp = ( props : MeuCompProps ) => {
    return(
        <>
            <h1>Meu Componente</h1>
            <p><b>Texto recebido: </b>{ props.texto }</p>
        </>
    )
}
export default MeuComp;