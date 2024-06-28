import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";
import Note from "./components/Note"
import Logo from "./components/Logo"

function App() {
  const apiCall = () => {
    axios.get("http://localhost:8080").then((data) => {
      console.log(data);
    })
  };
  return (
    <div className="App bg-black text-white font-serif p-2">
      <div className=''>
        <Logo title="Notes"/>
      </div>
      <Note title="Some title"/>
      <Note title="Some title 2"/>
      {/* <button onClick={apiCall}>click me</button> */}
    </div>
  );
}

export default App;
