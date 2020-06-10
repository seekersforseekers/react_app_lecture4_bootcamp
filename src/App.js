import React ,{useState}from 'react';//shadow dom or virtual dom
import logo from './logo.svg';
import './App.css';

function App() {
let {count,setcount}=userState(0)
  return (
    <div className="App">
   <h3>value of counter is:{count}</h3>
   
    </div>
  );
}

export default App;
