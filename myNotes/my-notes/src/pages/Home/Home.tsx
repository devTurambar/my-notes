import React from 'react';
import logo from './logo.svg';
import '../../App.css';
import axios from "axios";
import Note from "../../components/Note"
import Logo from "../../components/Logo"
import NotesList from "../../components/NotesList"
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

function Home() {
  const apiCall = () => {
    axios.get("http://localhost:8080").then((data) => {
      console.log(data);
    })
  };
  return (
    <div className='max-w-5xl m-auto'>
      <div className='mb-8'>
        <Logo title="My Notes"/>
      </div>
      <div className="flex mb-4">
        <Navbar />
      </div>
      <NotesList />
      {/* <button onClick={apiCall}>click me</button> */}
    </div>
  );
}

export default Home;
