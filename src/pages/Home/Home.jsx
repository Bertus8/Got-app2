import React from 'react';
import Nav from '../../components/Nav';
import "./Home.scss";
const Home = () => {

  return <div>
    <Nav/>
  <div className="home-container">
      <h1>Game Of Thrones</h1>
      <img className="img-home" src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644094216/DAG-coches/6065c636-48ca-4142-8b36-8fd60a70402b_bxdkkb.png" alt="Throne" />
  </div>
  </div>
};

export default Home;
