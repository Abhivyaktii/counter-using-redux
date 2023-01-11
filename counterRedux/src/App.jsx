import React from 'react'
import { useSelector,useDispatch } from 'react-redux'


export default function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch=useDispatch()
  const increment=()=>{
    dispatch({type:'INC'})
  }
  const decrement=()=>{
    dispatch({type:'DEC'})
  }

  const addby=()=>{
    dispatch({type:'ADD_BY',payload:10})
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={addby}>AddBY</button>
    </>
  )
}
