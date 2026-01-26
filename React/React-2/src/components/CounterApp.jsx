import React, { useState } from 'react'

const CounterApp = () => {
    // let count =0

    let [count, setCount] = useState(0)

    function increaseCounter(){
        setCount(count + 1)
        //console.log(count)
    }
    function decreaseCounter(){
        setCount(count - 1)
        //console.log(count)
    }
  return (
    <div> 
    <h1>Counter Application - {count}  </h1>
    <button onClick={increaseCounter}>Increment</button>
    <button onClick={decreaseCounter}>Decrement</button>
    </div>
  )
}

export default CounterApp