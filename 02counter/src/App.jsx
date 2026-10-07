import {useState} from 'react'
import './App.css'

function App() {
  
  const [counter,setCounter] = useState(15);

  const addValue = () => {
    if(counter>=0 && counter<20){
      setCounter(counter+1);
    }
  }

  const removeValue = () =>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value {counter} </h2>

      <button onClick={addValue}>Add value {counter}</button>
      <br></br>
      <button onClick={removeValue} >remove value {counter} </button>
    </>
  )
}

export default App
