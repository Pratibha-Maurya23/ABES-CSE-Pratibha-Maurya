import React, { useState } from 'react'

const Count1 = () => {
  const [count,setCount]=useState(0);

  const increment = () =>{
    setCount(count+1);
  }
  const decrement= ()=>{
    setCount(count-1);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={increment}>+</button>
      <span>{count}</span>
      <button onClick={decrement}>-</button>
    </div>
  )
}

export default Count1;

