import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  

  // let counter = 15;
  let addValue = () => {
    // console.log('Add Value' , counter);
    counter = counter + 1
    setCounter(counter)
  }

  let removeValue = () => {
    // console.log('Clicked')
    if(counter != 0){
      counter = counter - 1
      setCounter(counter)
    }
  }



  return (
    <>
      <h1><b><i>React</i></b></h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick = {addValue} >Add Value</button>
      <br />
      <br />
      <button onClick = {removeValue} >Remove Value</button>
    </>
  )
}

export default App
