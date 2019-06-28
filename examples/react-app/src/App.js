import React from 'react';
import logo from './logo.svg';
import './App.css';
import template from './example.yaml';

function App() {
  function renderYaml() {
    return JSON.stringify(template({ items: [
      { name: 'foo', value: 1 },
      { name: 'bar', value: 2 },
      { name: 'baz', value: 3 }
    ] }))
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Rendered Object</h2>
        <textarea>{renderYaml()}</textarea>
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
      </header>
    </div>
  );
}

export default App;
