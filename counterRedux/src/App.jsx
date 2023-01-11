import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import  actions  from './store'  
import { increment, decrement, addBy } from './store/index'


export default function App() {
  const counter = useSelector((state) => state.counter)
  const dispatch=useDispatch()
  const incrementfunc=()=>{
    console.log("dispatched");
    dispatch(increment())
  }
  const decrementfunc=()=>{
    dispatch(decrement())
  }

  const addByfunc=()=>{
    dispatch(addBy(10))
  }
  return (
    <>
      <h1>Counter</h1>
      <h2>{counter}</h2>
      <button onClick={decrementfunc}>decrement</button>
      <button onClick={incrementfunc}>increment</button>
      <button onClick={addByfunc}>AddBY</button>
    </>
  )
}
