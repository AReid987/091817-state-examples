import React from 'react';
import Counter from './Counter';
// import InputLogger from './InputLogger';
import TodoContainer from './TodoContainer';
import logo from './logo.svg';
import './App.css';

const App = props => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React</h1>
      </header>
      <TodoContainer />
    </div>
  );
};

export default App;
