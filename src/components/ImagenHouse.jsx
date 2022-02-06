import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import { getHouseByName} from  "../api/fetchApi";
import './ImageHouse.scss';


const ImagenHouse = ({character}) => {

    const [imagenHouse, setImagenHouse] = useState("");

    let { id } = useParams("id")

    useEffect(() => {

        getHouseByName("House Stark").then((data) => {
            setImagenHouse(data);
        })
    }, [])

    console.log(imagenHouse);
  return <div>
  {imagenHouse ? <img className="image-house"src={imagenHouse[0].logoURL} alt={imagenHouse.name}/> : null}
      
  </div>;
};

export default ImagenHouse;
