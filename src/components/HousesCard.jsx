import React from 'react';

import { Link, generatePath } from "react-router-dom";
import "./HousesCard.scss";
import NotFound from './NotFound';

const HouseCard = ({ house }) => {

  return (
    <Link to={generatePath("/houses/:name", { name: house.name })}>
    <div className="house-card">
      {house.logoURL ? <img src={house.logoURL} alt={house.name} /> : <NotFound/> }
      
      <h4 className="houses">{house.name}</h4>

      
     
    </div>
  </Link>
  );
};

export default HouseCard;
