import React from 'react';
import { Link } from 'react-router-dom'
import Logout from '../pages/Logout'

const navbar = () => {
  return (
    <nav>
      <div className="navbar-fixed">
      {
        localStorage.getItem('token')
        ?
        <div className="containerLogSign">
          <p>{localStorage.logedUserId}</p>
          <Logout />
        </div>
        :
        <div className="containerLogSign">
        <Link to={`/login`}>Login</Link>
        <Link to={`/signup`}>Signup</Link>
        </div>
      }
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="sass.html">PAGINA PRINCIPAL</a></li>
          <li><a href="badges.html">MENU</a></li>
          <li><a href="collapsible.html">TORTILLAS</a></li>
          <li><a href="collapsible.html">COMENTARIOS</a></li>
          <li><a href="collapsible.html">CONTACTO</a></li>
          <li><a href="collapsible.html">UBICACION</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;