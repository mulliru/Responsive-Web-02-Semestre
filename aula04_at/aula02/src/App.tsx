
import './App.css';
import Comp from './Comp';
export default function App(){
  let parag ={
    color:'green',
    fontSize:'30px'
  }
  return (  
    <>
      <Comp />
      <h1 className='h1' style={{fontSize:'4em'}}>Hello World!!!</h1>
      <h1 style={ parag }>Hello World2</h1>

    </>
  )
}