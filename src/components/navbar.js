import React from 'react';
import { Link } from 'react-router-dom'
import Logout from '../pages/Logout'

import M from "materialize-css/dist/js/materialize.min.js";

const navbar = () => {
  
  document.addEventListener('DOMContentLoaded', function() {
    // var elems = document.querySelectorAll('.sidenav');
    // var instances = M.Sidenav.init(elems);
    M.AutoInit();
  });

  let imgProfile = `${process.env.REACT_APP_BACKEND_URL}/imagen/usuarios/${localStorage.img}`;

  return (
    <>
    <nav>
      <div className="nav-wrapper">
      {/* {
        localStorage.getItem('token')
        ?
        <div className="containerLogSign">
          <Link to={`/admin/profile`}><img id="imgNavProfile" src={imgProfile} alt="Imagen de perfil"/></Link>
          <p>{localStorage.nameUser} {localStorage.surnamesUser} </p>
          <Logout />
        </div>
        :
        <div className="containerLogSign">
        <Link to={`/login`}>Login</Link>
        <Link to={`/signup`}>Signup</Link>
        </div>
      } */}

        <a href="#!" className="brand-logo">LOGO</a>
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        <ul className="right hide-on-med-and-down">
          <li><a href="#home">PAGINA PRINCIPAL</a></li>
          <li><a href="#sectionMenu">MENU</a></li>
          <li><a href="#sectionOmeletes">TORTILLAS</a></li>
          <li><a href="#sectionComments">COMENTARIOS</a></li>
          <li><a href="#sectionContact">CONTACTO</a></li>
          <li><a href="#">UBICACION</a></li>
        </ul>
      </div>
    </nav>

    <ul id="slide-out" className="sidenav">
      <li><div className="user-view">
        <div className="background">
          <img src="images/foto1.jpg"/>
        </div>
        <a href="#user"><img className="circle" src="images/foto1.jpg"/></a>
        <a href="#name"><span className="white-text name">John Doe</span></a>
        <a href="#email"><span className="white-text email">jdandturk@gmail.com</span></a>
      </div></li>
      <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
      <li><a href="#!">Second Link</a></li>
      <li><div className="divider"></div></li>
      <li><a className="subheader">Subheader</a></li>
      <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
    </ul>
    
    </>

    
  );
};

export default navbar;