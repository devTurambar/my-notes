import React from 'react';
import logo from './logo.svg';
import '../../App.css';
import axios from "axios";
import Note from "../../components/Note"
import Logo from "../../components/Logo"
import NotesList from "../../components/NotesList"

function App() {
  const apiCall = () => {
    axios.get("http://localhost:8080").then((data) => {
      console.log(data);
    })
  };
  return (
    <div>
      <div className='mb-8'>
        <Logo title="Notes"/>
      </div>
      <NotesList />
      {/* <button onClick={apiCall}>click me</button> */}
    </div>
  );
}

export default App;
