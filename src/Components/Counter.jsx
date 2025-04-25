import React, { useEffect } from 'react'
import { useState } from 'react'
import Navbar from './Navbar';
const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

useEffect(() => {
    alert("Component mounted");
}, [])

useEffect(() => {
    alert("Component updated");
}, [count])
  return (
    <div>
        <Navbar  color ={"navy" + " " + "blue"}/>
        <h1 className='text-center text-4xl p-5'>Counter value is : {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  )
}

export default Counter
