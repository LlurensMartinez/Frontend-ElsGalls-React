import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar'

class Profile extends Component {
  
  render() {

  let imgProfile = `${process.env.REACT_APP_BACKEND_URL}/imagen/usuarios/${localStorage.img}`;

    return (
        <>
        <Navbar />
        <div className="profileContainer">
          <img  id="profileImage" src={imgProfile} alt="IMAGEN"/>
          <h3><b>Nombre:</b></h3> 
          <p>{localStorage.nameUser}</p>
          <h3><b>Apellidos:</b></h3> 
          <p>{localStorage.surnamesUser}</p>
          <h3><b>Email:</b></h3>
          <p>{localStorage.emailUser}</p>
          <Link to={`/admin/profile/edit`}>EDITAR PERFIL</Link>
        </div>
        </>
      
    );
  }
}

export default Profile;