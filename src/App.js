import React from 'react';
import logo from './logo.svg';
import './App.css';

import StateHook from './components/StateHook';
import EffectHook from './components/EffectHook';
import HooksCounter from './components/HooksCounter';
import FlexBoxSample from './components/FlexBoxSample';
import TextEditor from './components/TextEditor';

function App() {
  return (
    <div className="App">
      {false && <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> }

      <main>
        <TextEditor />>
      </main>
    </div>
  );
}

export default App;
