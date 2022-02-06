import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getHouseByName, getCharactersByName} from "../../api/fetchApi.js";
import CharacterCardDetail from "../../components/CharacterCardDetail.jsx";
import "./CharacterDetail.scss";

const CharacterDetail = ( ) => {

  const [ character, setCharacter ] = useState ([]);
  const [ characterHouse, setCharacterHouse ] = useState([]);
  let { id } = useParams("id");

  useEffect(() => {
    if (id) 
    getCharactersByName(id).then((data) => {
      setCharacter(data)
    }); 
  }, []);
  
  console.log(character);
  console.log(characterHouse);


   
  return (

    <div >
         <span>
       <NavLink to="../" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644147773/DAG-coches/Home_rgfura.png"/></NavLink>
      </span>
      <CharacterCardDetail character={character} />
      
    </div>
  );
};

export default CharacterDetail;
