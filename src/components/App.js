import React from "react";
import { useEffect, useState } from "react";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";
//services
import callToApi from "../services/api";
import ls from "../services/localStorage";
//routes
import { Routes, Route, matchPath, useLocation } from "react-router-dom";
//styles
import "../styles/App.scss";

function App() {
  //STATE VARIABLES
  //Recoge la información de la llamada a la API
  const [dataCharacter, setDataCharacter] = useState([]);
  //Filters
  const [filterByName, setFilterByName] = useState(ls.get("name", ""));
  const [filterBySpecies, setFilterBySpecies] = useState("All", "");

  //USE EFFECT
  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
      setDataCharacter(data);
    });
  }, []);

  //EVENT FUNCTIONS
  //Filters
  const handleFilterName = (value) => {
    setFilterByName(value);
    ls.set("name", value);
  };

  const handleFilterSpecies = (value) => {
    setFilterBySpecies(value);
  };
  //Reset button - clean ls and inputs
  const handleReset = () => {
    ls.clear();
    setFilterByName("");
    setFilterBySpecies("All");
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
        return filterBySpecies === "All"
          ? true
          : filterBySpecies.includes(character.species);
      });
  };

  ///ROUTES CONST
  const { pathname } = useLocation();

  const dataUrl = matchPath("/character/:characterId", pathname);

  const characterId = dataUrl !== null ? dataUrl.params.characterId : null;

  const characterFound = dataCharacter.find(
    (character) => character.id === parseInt(characterId)
  );

  //RETURN
  return (
    <>
      <header className="header">
        <h1 className="title">Rick and Morty</h1>
      </header>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <main className="main">
                <Filters
                  filterByName={filterByName}
                  handleFilterName={handleFilterName}
                  filterBySpecies={filterBySpecies}
                  handleFilterSpecies={handleFilterSpecies}
                  handleReset={handleReset}
                />
                <CharacterList dataCharacter={filteredCharacters()} />
              </main>
            </>
          }
        />
        <Route
          path="/character/:characterId"
          element={<CharacterDetail character={characterFound} />}
        />
      </Routes>
    </>
  );
}

export default App;
