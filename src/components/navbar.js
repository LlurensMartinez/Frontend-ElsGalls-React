import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Logout from '../pages/Logout'

class navBar extends Component {
  
  state = {
    isLoged: false,
    imgProfile: `${process.env.REACT_APP_BACKEND_URL}/imagen/usuarios/${localStorage.img}`,
  }

  
  componentDidMount(){
    this.isLoged();
  }
  

  
  isLoged = () => {
    localStorage.getItem('token')

    if(localStorage.token) {
      this.setState({
        isLoged: true
      })
    } else {
      this.setState({
        isLoged: false
      })
    }
  }

  isLogedNavbar = () => {
    if(this.state.isLoged === true) {
      return (
              <div className="containerLogSign left hide-on-med-and-down">
                <Link to={`/admin/profile`}><img id="imgNavProfile" src={this.state.imgProfile} alt="Imagen de perfil"/></Link>
                <p>Bienvenido, {localStorage.nameUser}</p>
                <Logout />
              </div>
      )
    }else {
      return (
              <div className="containerLogSign left hide-on-med-and-down">
                  <Link to={`/login`}>Iniciar Sesión!</Link>
                  <Link to={`/signup`}>Signup</Link>
              </div>
      )
    }
  }

  isLogedSideNav = () => {
    if(this.state.isLoged === true) {
      return(
        <>
          <a href="#user"><img className="circle" src={this.state.imgProfile}/></a>
          <a href="#name"><span className="white-text name">{localStorage.nameUser} {localStorage.surnamesUser}</span></a>
          <a href="#email"><span className="white-text email">{localStorage.emailUser}</span></a>
        </>
      )
    } 
  }

  isNotLogedSideNav = () => {
    if(this.state.isLoged === false) {
      return(
        <>
          <li><Link to={`/signup`} className="sidenav-close"><i className="material-icons">face</i>Registrate!</Link></li>
          <li><Link to={`/login`}  className="sidenav-close"><i className="material-icons">keyboard_tab</i>Iniciar Sesión!</Link></li>
        </>
      )
    } else {
      return(
        <>
          <li><Link to={`/admin/profile`} className="sidenav-close"><i className="material-icons">person_pin</i>Perfil</Link></li>
          <li><Link to={`/admin/comment/edit`} className="sidenav-close"><i className="material-icons">person_pin</i>Mis Comentarios</Link></li>
          <li><Link to={`/admin/comment`} className="sidenav-close"><i className="material-icons">person_pin</i>Añadir Comentario</Link></li>
          <li><a class="sidenav-close"><i className="material-icons">close</i><Logout /></a></li>
        </>
      )
    }
  }

  render() {
  return (
    <>
    <nav>
      <div className="navbar-fixed nav-wrapper">
        {/* <a href="#!" className="brand-logo">LOGO</a> */}
        <a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>

        {this.isLogedNavbar()}

        <ul className="right hide-on-med-and-down">
          <li><a href="/#home">PAGINA PRINCIPAL</a></li>
          <li><a href="/#sectionMenu">MENU</a></li>
          <li><a href="/#sectionOmeletes">TORTILLAS</a></li>
          <li><a href="/#sectionComments">COMENTARIOS</a></li>
          <li><a href="/#sectionContact">CONTACTO</a></li>
          <li><a href="#">UBICACION</a></li>
        </ul>
      </div>
    </nav>

    <ul id="slide-out" className="sidenav">
      <li><div className="user-view">
        <div className="background">
          <img src="https://images.unsplash.com/photo-1546470427-227e2f27f02c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=975&q=80"/>
        </div>
        {this.isLogedSideNav()}
      </div></li>
      <li><a href="/#home" className="sidenav-close"><i className="material-icons amber-text text-darken-4">home</i>Pagina Principal</a></li>
      <li><a href="/#sectionMenu" className="sidenav-close"><i className="material-icons amber-text text-darken-4">restaurant_menu</i>Menu</a></li>
      <li><a href="/#sectionOmeletes" className="sidenav-close"><i className="material-icons amber-text text-darken-4">room_service</i>Tortillas</a></li>
      <li><a href="/#sectionComments" className="sidenav-close"><i className="material-icons amber-text text-darken-4">mode_comment</i>Ultimos Comentarios</a></li>
      <li><a href="/#sectionContact" className="sidenav-close"><i className="material-icons amber-text text-darken-4">contact_mail</i>Contacto</a></li>
      <li><a href="#!" class="sidenav-close"><i className="material-icons amber-text text-darken-4">location_on</i>Ubicacion</a></li>
      <li><div className="divider"></div></li>
      {this.isNotLogedSideNav()}
    </ul>
    
    </>

    
  );
  }
};

export default navBar;