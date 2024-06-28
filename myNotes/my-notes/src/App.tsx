import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from "axios";

function App() {
  const apiCall = () => {
    axios.get("http://localhost:8080").then((data) => {
      console.log(data);
    })
  };
  return (
    <div className="App">
      <button onClick={apiCall}>click me</button>
    </div>
  );
}

export default App;
