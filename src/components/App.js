import React from "react";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import CharacterCard from "./CharacterCard";
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
    console.log(value);
  };
  //RENDER FUNCTIONS
  const filteredCharacters = dataCharacter.filter((characters) =>
    characters.name.toLowerCase().includes(filterByName.toLowerCase())
  );
  console.log(filteredCharacters);
  //RETURN
  return (
    <>
      <header>
        <h1>Rick and Morty</h1>
      </header>
      <main>
        <Filters
          filterByName={filteredCharacters}
          handleFilterName={handleFilterName}
        />
        <CharacterList
          dataCharacter={filteredCharacters}
          filterByName={filterByName}
        />
      </main>
    </>
  );
}

export default App;
