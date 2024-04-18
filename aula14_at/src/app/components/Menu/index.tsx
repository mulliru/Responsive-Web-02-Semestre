
import { Container } from "./style";
import ReactSwitch from "react-switch";
import { useState } from "react";

interface IProps{
    onChange : ( checked : boolean ) => void;
}

const Menu : React.FC<IProps> = ({ onChange }) => {

    const [check,setCheck] = useState( false );

    const toggleSwitch = () =>{
        let newValue = !check;
        setCheck(newValue);
        onChange(newValue)
    }

    return(
        <>
        <Container>
            <h3>Tutorial de Temas com React, TypeScript e Styled Components</h3>
            <ReactSwitch onChange={ toggleSwitch } checked={ check } />
        </Container>
        </>
    )
}
export default Menu;