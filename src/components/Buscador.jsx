import React from "react";
import './Buscador.scss';

const Buscador = ({texto, setTexto}) => {
;

  const handleInputChange = ({target}) => {
    setTexto(target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault()
    
    console.log(texto);
  }
  return (
    <div className="buscador">
      <button className="btn-lupa" type="submit"><img src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644151367/DAG-coches/search_1_mjhowr.png" alt="lupa"/></button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="buscar"
          placeholder="buscar..."
          value={texto}
          onChange={handleInputChange}
        />

      </form>
    </div>
  );
};

export default Buscador;
