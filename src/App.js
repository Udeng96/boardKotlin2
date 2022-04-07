import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Board Example
        </p>
      </header>
    </div>
  );
}

export default App;
