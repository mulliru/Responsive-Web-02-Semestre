
interface TorreProps{
    altura : number;
    cor : string;
    janelas : boolean;
}

const Torre : React.FC<TorreProps> = ( props ) =>{
    return(
        <>
            <h1>Meu Castelo</h1>
            <p><b>Altura: </b>{ props.altura } metros</p>
            <p style={{backgroundColor:props.cor}}><b>Cor: </b>{ props.cor }</p>
            <p><b>Possui Janelas? </b>{ props.janelas ? 'Sim' : 'Não' }</p>
        </>
    )
}
export default Torre;