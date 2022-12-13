import React from "react";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
//services
import callToApi from "../services/api";
//routes
//import { Routes, Route } from "react-router-dom";
//styles
import "../styles/App.scss";

function App() {
  //STATE VARIABLES
  const [dataCharacter, setDataCharacter] = useState([]);
  const [filterByName, setFilterByName] = useState("");
  //USE EFFECT
  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setDataCharacter(data);
    });
  }, []);
  //EVENT FUNCTIONS
  const handleFilterName = (value) => {
    setFilterByName(value);
  };
  //RENDER FUNCTIONS
  //RETURN
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <CharacterList characters={dataCharacter} />
        <Filters handleFilterName={handleFilterName} />
      </main>
    </>
  );
}

export default App;
