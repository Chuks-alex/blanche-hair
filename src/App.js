import React from 'react';
import './App.css';
import Navbar from "./components/navbar"
import Home from "./components/home"
import Services from './components/services';
function App() {
  return (
    <div className="App">
   <h1>BLANCHE HAIRS</h1>
    <Navbar/>
    <Home/>
  <Services/>
    </div>
  );
}

export default App;
 