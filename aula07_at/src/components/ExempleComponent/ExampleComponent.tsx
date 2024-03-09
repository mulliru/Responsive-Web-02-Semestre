import React, { useState } from 'react';

const ExampleComponent : React.FC = () =>{

    const [count,setCount] = useState(0)

    const increment = () => {
        setCount(count +1)
    }

    return (
        <>
        <button onClick={ increment }>Click aqui</button>
        <p>Contador: { count } </p>
        </>
    )
}
export default ExampleComponent