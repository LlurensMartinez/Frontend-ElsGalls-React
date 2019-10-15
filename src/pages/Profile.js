import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Profile extends Component {
  
  render() {
    return (
      <div>
        {/* <img src="file:///Users/llorensmartinezmartinez/Desktop/WebELsGalls/backendElsGalls/uploads/usuarios/5d9dde8ed4e2798755f28619-988.jpg" alt="Imagen de perfil"/> */}
        <h2>Nombre: {localStorage.nameUser}</h2>
        <h3>Apellidos: {localStorage.surnamesUser}</h3>
        <p>Email: {localStorage.emailUser}</p>
        <Link to={`/admin/profile/edit`}>EDITAR PERFIL</Link>
  
      </div>
    );
  }
}

export default Profile;