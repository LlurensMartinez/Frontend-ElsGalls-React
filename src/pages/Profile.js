import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'

class Profile extends Component {
  
  render() {

    let imgProfile = `${process.env.REACT_APP_BACKEND_URL}/imagen/usuarios/${localStorage.img}`
    return (
        <div>
          <Navbar />
          <img  id="profileImage" src={imgProfile} alt="IMAGEN"/>
          <h2>Nombre: {localStorage.nameUser}</h2>
          <h3>Apellidos: {localStorage.surnamesUser}</h3>
          <p>Email: {localStorage.emailUser}</p>
          <Link to={`/admin/profile/edit`}>EDITAR PERFIL</Link>
    
        </div>
      
    );
  }
}

export default Profile;