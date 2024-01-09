import React, { useState } from 'react'

const Content = ({id,que,ans}) => {
    const [state,setState]=useState(false);
   
    const handleclick=()=>{
       setState(!state)
    }
    
  return (
    <>
    <div className='container'>
        <div className='questions'>
            <h2>{que}</h2>
            <button onClick={handleclick}>+</button>
        </div>
        <div className={state?"active":"answers"}>
    
           {ans}
        </div>
    </div>
   
    </>
  )
}

export default Content