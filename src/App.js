import React ,{useState}from 'react';//shadow dom or virtual dom
import logo from './logo.svg';
import './App.css';

export default function App() {
let {count, setcount}=userState(0)
  return (
    <div >
   <h3>value of counter is:{count}</h3>
<button onClick={
  ()=>setcount(count+1)
}>
  update button
</button>
    </div>
  );
}


