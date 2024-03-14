import Torre from "./Torre";

const MeuCastelo = () =>{
    return(
        <>
            <Torre altura={ 10 } cor='yellow' janelas={ false } />
            <Torre altura={ 23 } cor='red' janelas={ true } />
        </>
    )
}
export default MeuCastelo;