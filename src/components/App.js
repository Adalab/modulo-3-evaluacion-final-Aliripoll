import React from "react";
import { useEffect } from "react";
import CharacterList from "./CharacterList";
import FilterByName from "./FilterByName";
import FilterBySpecies from "./FilterBySpecies";
//services
import callToApi from "../services/api";
//routes
import { Routes, Route } from "react-router-dom";
//styles
import "../styles/App.scss";

function App() {
  //STATE VARIABLES
  //USE EFFECT
  useEffect(() => {
    callToApi().then((data) => {
      console.log(data);
    });
  }, []);
  //EVENT FUNCTIONS
  //RENDER FUNCTIONS
  //RETURN
  return <div>Hola mundo</div>;
}

export default App;
