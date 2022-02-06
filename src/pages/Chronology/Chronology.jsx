import React, { useState, useEffect } from "react";
import { getCharacters } from "../../api/fetchApi";
import { NavLink } from "react-router-dom";
import Nav from '../../components/Nav';
import "./Chronology.scss";

const Chronology = () => {
  const [character, setCharacter] = useState([]);
  const charactersFilter = [];
  const [ageOrder, setAgeOrder] = useState(true);
  const characterPar = [];
  const characterImpar = [];

  for (let item of character) {
    if (item.age && item.age.age !== null && item.age.age !== undefined) {
      charactersFilter.push(item);
    }
  }
  if (ageOrder === false) {
    //ascending
    charactersFilter.sort(
      (a, b) => parseFloat(a.age.age) - parseFloat(b.age.age)
    );
  } else {
    //descending
    charactersFilter.sort(
      (a, b) => parseFloat(b.age.age) - parseFloat(a.age.age)
    );
  }
  for (let i = 0; i < charactersFilter.length; i++) {
    if (i % 2 === 0) {
      characterPar.push(charactersFilter[i]);
    } else {
      characterImpar.push(charactersFilter[i]);
    }
  }

  useEffect(() => {
    getCharacters().then((data) => {
      setCharacter(data);
    });
  }, []);

  return (
    <div>
    <Nav/>
    <span>
       <NavLink to="../" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644147773/DAG-coches/Home_rgfura.png"/></NavLink>
      </span>
    <div className="chronology-container">
    
      <div className="btn-container">
        <button
          onClick={() => {
            ageOrder === true ? setAgeOrder(false) : setAgeOrder(true);
          }}
        >
          {ageOrder === true ? 96 : 0}
        </button>

        <img
          className="vector-img"
          src="https://res.cloudinary.com/dn0bflwpm/image/upload/v1644148923/imagen%20los%20caballeros%20del%20%20zodiaco/Vector_tythno.png"
          alt="vector"
        ></img>
      </div>
      <div className="list-container">
        <div className="par">
          {characterPar.map((character) => (
            <div className="cardCharacter">
              <h3>{character.age.age}</h3>
              <h3> {character.name} </h3>
              <div className="img-container">
                <img src={character.image} alt={character.name} />
              </div>
            </div>
          ))}
        </div>
        <div className="impar">
          {characterImpar.map((character) => (
            <div className="cardCharacter">
              <h3>{character.age.age}</h3>
              <h3> {character.name} </h3>
              <div className="img-container">
                <img src={character.image} alt={character.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default Chronology;
