/* eslint-disable no-unused-vars */
import React from 'react'
import './App.css';
import Navbar from './components/navbar';
import ContactMe from './contactMe';
import Home from './homePage';
import Projects from './projects';

function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Projects/>
    <ContactMe/>
    </>
  );
}

export default App;
