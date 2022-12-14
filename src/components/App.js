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
  const [filterBySpecies, setFilterBySpecies] = useState("");
  // const [filterByAll, setFilterByAll] = useState("All"); INTENTO DE FILTRO!!!
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

  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };

  //RENDER FUNCTIONS

  const filteredCharacters = () => {
    return dataCharacter
      .filter((character) => {
        return character.name
          .toLowerCase()
          .includes(filterByName.toLowerCase());
      })
      .filter((character) => {
        return filterBySpecies.length === 0
          ? true
          : filterBySpecies.includes(character.species);
      });
  };

  /* const filteredCharacters = dataCharacter
    .filter((character) =>
      character.name.toLowerCase().includes(filterByName.toLowerCase())
    )
    .filter((character) =>
      filterBySpecies === ""
        ? true
        : character.species.toLowercase() === filterBySpecies.toLowerCase()
    ); */

  //RETURN
  return (
    <>
      <header className="header">
        <h1 className="title">Rick and Morty</h1>
      </header>
      <main className="main">
        <Filters
          filterByName={filteredCharacters()}
          handleFilterName={handleFilterName}
          filterBySpecies={filteredCharacters()}
          handleFilterSpecies={handleFilterSpecies}
        />
        <CharacterList
          dataCharacter={filteredCharacters()}
          /* filterByName={filterByName}
          filterBySpecies={filterBySpecies} */
        />
      </main>
    </>
  );
}

export default App;
