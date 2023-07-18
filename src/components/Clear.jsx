import React from 'react'
import '../style/clear.css'

function Clear(prop) {
  return (
    <>
    <div className='clear' onClick={prop.handleClear} >
        {prop.children}
    </div>
    </>
  )
}

export default Clear