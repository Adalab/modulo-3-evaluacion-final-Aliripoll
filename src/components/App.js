import React from "react";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
/* import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies"; */
//services
import callToApi from "../services/api";
//routes
//import { Routes, Route } from "react-router-dom";
//styles
import "../styles/App.scss";

function App() {
  //STATE VARIABLES
  const [dataCharacter, setDataCharacter] = useState([]);
  //USE EFFECT
  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setDataCharacter(data);
    });
  }, []);
  //EVENT FUNCTIONS
  //RENDER FUNCTIONS
  //RETURN
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <CharacterList characters={dataCharacter} />
      </main>
    </>
  );
}

export default App;
