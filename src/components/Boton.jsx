import React from 'react'
import '../style/boton.css'

function Boton(props) {
  const isOperator = valuee =>{
    return isNaN(valuee) && (valuee !== '.') && (valuee !== '=');
  }
  return (
    <>
    <div className={`boton-container ${isOperator(props.children) ? 'operator' : ''}`} onClick={()=> props.handleClick(props.children) } >
        {props.children}
    </div>
    </>
  )
}

export default Boton