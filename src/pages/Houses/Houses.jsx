import React, { useEffect, useState, useContext } from "react";
import { getHouses } from "../../api/fetchApi";
import HouseCard from "../../components/HousesCard";
import "./Houses.scss";
import Buscador from "../../components/Buscador";
import Nav from '../../components/Nav';
import { NavLink } from "react-router-dom";

const Houses = () => {
  const [texto, setTexto] = useState("");
  const [houses, setHouses] = useState([]);

  useEffect(() => {
    getHouses().then((data) => {
      setHouses(data);
    });
  }, []);

  const casasFilter = houses.filter((casas) =>
    casas.name.toLowerCase().includes(texto.toLowerCase())
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
      <div className="houses-container">
        {casasFilter.map((house) => (
          <HouseCard key={house.name} house={house} />
        ))}
      </div>
    </div>
  );
};

export default Houses;
