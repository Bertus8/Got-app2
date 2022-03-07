import React from 'react';
import  "./CharacterCardDetail.scss";
import { Link } from "react-router-dom"
import ImagenHouse from '../components/ImagenHouse';
import { FormattedMessage } from "react-intl";
const CharacterCardDetail = ({ character}) => {

  
  return (<div className="character-container">
      <div className="character-card-link">
      <Link to="/characters"><FormattedMessage id="app.charactersDetail.back" defaultMessage="← Go back" ></FormattedMessage></Link>
      </div>
      
      
      <img className="character-img" src={character.image} alt={character.name} />
      {character.name ?  <h2 className="character-container-name">{character.name}</h2> : null}
      <div className="character-list-container">
            <ul>
                <li >
                    <h4 className='title-detail'><FormattedMessage id="app.charactersDetail.house" defaultMessage="House" ></FormattedMessage></h4>
                </li>
                <li>
               <ImagenHouse character={character}/>
                </li>
            </ul>
            <ul>
                <li>
                    <h4 className='title-detail'><FormattedMessage id="app.charactersDetail.allegiances" defaultMessage="Allegiances" ></FormattedMessage></h4>
                </li>
                {character.allegiances ? <li><p>{character.allegiances[0]}</p></li> : null }
                {character.allegiances ? <li><p>{character.allegiances[1]}</p></li> : null }
                {character.allegiances ? <li><p>{character.allegiances[2]}</p></li> : null }
            </ul>
            <ul>
                <li>
                    <h4 className='title-detail'><FormattedMessage id="app.charactersDetail.appearances" defaultMessage="Appearances" ></FormattedMessage></h4>
                </li>
              
                 {character.appearances ? <li><p>{character.appearances[0]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[1]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[2]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[3]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[4]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[5]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[6]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[7]}</p></li> : null }
                 {character.appearances ? <li><p>{character.appearances[8]}</p></li> : null }
               
            </ul>
            <ul>
                <li>
                    <h4 className='title-detail'><FormattedMessage id="app.charactersDetail.father" defaultMessage="Father" ></FormattedMessage></h4>
                </li>
                <li>
                 <p> {character.father}</p>
                </li>
            </ul>
            <ul>
                <li>
                    <h4 className='title-detail'><FormattedMessage id="app.charactersDetail.siblings" defaultMessage="Siblings" ></FormattedMessage></h4>
                </li>
                {character.siblings ? <li><p>{character.siblings[0]}</p></li> : null }
                {character.siblings ? <li><p>{character.siblings[1]}</p></li> : null }
                {character.siblings ? <li><p>{character.siblings[2]}</p></li> : null }

            </ul>
            <ul>
                <li>
                    <h4 className='title-detail'><FormattedMessage id="app.charactersDetail.titles" defaultMessage="Titles" ></FormattedMessage></h4>
                </li>
                 {character.titles ? <li><p>{character.titles[0]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[1]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[2]}</p></li> : null }                
                 {character.titles ? <li><p>{character.titles[3]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[4]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[5]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[6]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[7]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[8]}</p></li> : null }                 
                 {character.titles ? <li><p>{character.titles[9]}</p></li> : null }
            </ul>
       </div> 

  </div>);
};

export default CharacterCardDetail;
