import React from "react";
import "./App.css";
import CardList from "./Components/CardList/CardList";
import Headers from "../src/Components/Header/Header";
import QuizList from "./QuizList/QuizList";
import Routes from "./Routes/Routes";
import NavBar from "./Components/NavBar/NavBar";

function App() {
  return (
    <div className="App">
      <Headers />
      <NavBar />
      <Routes />
      {/* <QuizList /> */}

      {/* <CardList /> */}
    </div>
  );
}

export default App;
