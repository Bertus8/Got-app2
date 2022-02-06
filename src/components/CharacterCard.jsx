import React from 'react';

import { Link, generatePath } from "react-router-dom";
import "./CharacterCard.scss";

const CharacterCard = ({ character }) => {

  const containerStyle = {
    background:
     `url(${character.image})`,
  }
  return (
    <Link to={generatePath("/characters/:name", { name: character.name })}>
    
    <div className="character-card" style={containerStyle}>
      <h4>{character.name}</h4>
    </div>
  </Link>
  );
};

export default CharacterCard;
