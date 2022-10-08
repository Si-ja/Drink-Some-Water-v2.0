import React from 'react';
import logo from './logo.svg';
import './App.css';

import MainGame from './Components/MainGame';

function App() {
  return (
    <div className="App">
      <link href='https://fonts.googleapis.com/css?family=Press Start 2P' rel='stylesheet'></link>
      <header className="App-header">
        <MainGame />
      </header>
    </div>
  );
}

export default App;
