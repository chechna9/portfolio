import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import ContactMe from './contactMe';
import Home from './homePage';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <ContactMe/>
    </>
  );
}

export default App;
