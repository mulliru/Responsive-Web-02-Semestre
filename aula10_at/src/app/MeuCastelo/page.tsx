import Torre from "./Torre";

const MeuCastelo = () =>{
    return(
        <>
            <Torre altura={10} cor="preto" janelas={false} />
            <Torre altura={22210} cor="rosa" janelas={true} />

        </>
    )
}
export default MeuCastelo;