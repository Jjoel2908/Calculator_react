import { useState } from 'react'
import './App.css'
import Boton from './components/Boton'
import Screen from './components/Screen'
import Clear from './components/Clear'

function App() {

  const [input, setInput] = useState('');

  const add = val => {
    setInput(input + val);
  };

  const result = () => {
    if (input) {
      setInput(eval(input));
    }
    else {
      alert('Ingrese valores antes de calcular');
    }
  };

  return (
    <>
    <div className="App">
      <div className="calculadora">
        <Screen input={input} />
        <div className='boxes'>
          <Boton handleClick={add} >1</Boton>
          <Boton handleClick={add} >2</Boton>
          <Boton handleClick={add} >3</Boton>
          <Boton handleClick={add} >+</Boton>
        </div>
        <div className='boxes'>
          <Boton handleClick={add} >4</Boton>
          <Boton handleClick={add} >5</Boton>
          <Boton handleClick={add} >6</Boton>
          <Boton handleClick={add} >-</Boton>
        </div>
        <div className='boxes'>
          <Boton handleClick={add} >7</Boton>
          <Boton handleClick={add} >8</Boton>
          <Boton handleClick={add} >9</Boton>
          <Boton handleClick={add} >x</Boton>
        </div>
        <div className='boxes'>
          <Boton handleClick={result} >=</Boton>
          <Boton handleClick={add} >0</Boton>
          <Boton handleClick={add} >.</Boton>
          <Boton handleClick={add} >%</Boton>
        </div>
        <div className='boxes'>
          <Clear handleClear={()=> setInput('')} >
            Clear 
          </Clear>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
