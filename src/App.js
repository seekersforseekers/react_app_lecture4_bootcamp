import React ,{useState}from 'react';//shadow dom or virtual dom
import logo from './logo.svg';
import {Message} from './Message.js'
import './App.css';

export default function App() {
let {count, setCount}=useState(0);
  return (
    <div >
      <Message counter={count}/>
   <h3>value of counter is:{count}</h3>
<button onClick={
 ()=>setCount(count + 1)
}>
  update counter
</button>
    </div>
  );
}


