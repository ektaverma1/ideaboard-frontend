import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import IdeasContainer from './components/IdeasContainer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1>IdeaBoard</h1>
        </div>
        <IdeasContainer />
      </div>
    );
  }
}

export default App;
