import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.scss'
import { FormattedMessage } from "react-intl";
import { Context } from "./Wrapper";

const Nav = (props) => {
const context = useContext(Context)
  return (<nav>

      <div className="container-button">
  
      <button value={context.locale,"en"} onClick={context.selectLanguage}>
      <img className="img-nav" src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644090849/DAG-coches/united-kingdom_1_eccdla.png"/>
      </button>
      <button value={context.locale,"es"} onClick={context.selectLanguage}>
      <img className="img-nav" src="https://res.cloudinary.com/dtaz65dmf/image/upload/v1644090846/DAG-coches/spain_1_lrnufu.png"/>
      </button>
      </div>
      <div className='container-link'> 
      <NavLink to="../characters" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><FormattedMessage id="app.nav.personajes" defaultMessage="Characters" ></FormattedMessage></NavLink>
      <NavLink to="/houses" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><FormattedMessage id="app.nav.casas" defaultMessage="Houses" ></FormattedMessage></NavLink>
      <NavLink to="/Chronology" className={({ isActive }) => (isActive ? 'active' : 'inactive')}><FormattedMessage id="app.nav.cronologia" defaultMessage="Cronology" ></FormattedMessage></NavLink>
      </div>

  </nav>
  );
};

export default Nav;