import React, {useState, useEffect} from 'react';
import { getHouseByName } from '../../api/fetchApi';
import { useParams } from 'react-router-dom'
import { NavLink } from "react-router-dom";
import HouseCardDetail from "../../components/HouseCardDetail.jsx"
import "./HouseDetail.scss";

const HouseDetail = ( ) => {
const[houseDetail, setHouseDetail] = useState ([]);
let { id } = useParams("id");

useEffect(() =>{
  if (id)
  getHouseByName(id).then((data) =>{
    setHouseDetail(data);
  })
}, []);

console.log(houseDetail)


  return (
    <div>
         <span>
       <NavLink to="../" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644147773/DAG-coches/Home_rgfura.png"/></NavLink>
      </span>
      <HouseCardDetail houseDetail={houseDetail} />
    </div>
  )
    

  
};

export default HouseDetail;
