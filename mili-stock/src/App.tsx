import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

import SignUp from './views/SignUp/index';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
      </header>
      <SignUp />
    </div>
  );
}

export default App;
