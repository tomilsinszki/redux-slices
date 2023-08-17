import React from 'react';
import './App.css';
import Container from "./components/Container";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Container/>
        <Counter/>
      </header>
    </div>
  );
}

export default App;
