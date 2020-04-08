import React from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Headers from "../src/Components/Header/Header";

function App() {
  return (
    <div className="App">
    
       <Headers />
       <CardList />
    </div>
  );
}

export default App;
