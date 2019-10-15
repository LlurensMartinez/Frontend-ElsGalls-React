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
          <Link to={`/admin/profile`}><img id="imgNavProfile" src={localStorage.imgUser} alt="Imagen de perfil"/></Link>
          <p>{localStorage.nameUser} {localStorage.surnamesUser} </p>
          <Logout />
        </div>
        :
        <div className="containerLogSign">
        <Link to={`/login`}>Login</Link>
        <Link to={`/signup`}>Signup</Link>
        </div>
      }
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="#home">PAGINA PRINCIPAL</a></li>
          <li><a href="#sectionMenu">MENU</a></li>
          <li><a href="#sectionOmeletes">TORTILLAS</a></li>
          <li><a href="#sectionComments">COMENTARIOS</a></li>
          <li><a href="#sectionContact">CONTACTO</a></li>
          <li><a href="#">UBICACION</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;