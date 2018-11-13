import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Trans } from '@lingui/macro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><Trans>Homepage</Trans></h1>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Trans>Edit <code>src/App.js</code> and save to reload.</Trans>
          </p>
            <Trans>Learn Lingui</Trans>
        </header>
      </div>
    );
  }
}

export default App;
