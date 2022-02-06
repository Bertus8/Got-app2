import React, { useState, useEffect } from "react";
import { getCharacters } from "../../api/fetchApi";
import CharacterCard from "../../components/CharacterCard";
import "./Characters.scss";
import Buscador from "../../components/Buscador";
import Nav from '../../components/Nav';
import { NavLink } from "react-router-dom";

const Characters = () => {
  const [texto, setTexto] = useState("");
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacters(data);
    });
  }, []);

  const charFilter = characters.filter((character) =>
    character.name.toLowerCase().includes(texto.toLowerCase())
  );

  return (
    <div>
             <Nav/>
      <div>
        <Buscador texto={texto} setTexto={setTexto} />
        <span>
       <NavLink to="../" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644147773/DAG-coches/Home_rgfura.png"/></NavLink>
      </span>
      </div>
  
     
      <div className="characters-container">
        {charFilter.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </div>
  );
};

export default Characters;
