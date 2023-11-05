import logo from './logo.svg';
import './App.css';
import './TodoList'
import TodoList from './TodoList';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [todos] = useState([
    {id: uuidv4(), name: "Todo1", completed: false},
    {id: uuidv4(), name: "Todo2", completed: false},
    {id: uuidv4(), name: "Todo2", completed: false},
    {id: uuidv4(), name: "Todo2", completed: false},
    {id: uuidv4(), name: "Todo2", completed: false},
  ]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <TodoList todos={todos}/>
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
