import React, { Component } from 'react';

class comment extends Component {
  
  render() {
    const {comment, title, user} = this.props.comments;
    
    let imgProfile = `${process.env.REACT_APP_BACKEND_URL}/imagen/usuarios/${user.img}`

    return (
      <div class="commentContainer">
          <img id="imgCommentProfile" src={imgProfile} alt="Imagen de perfil"/>
          <h2>{user.nombre} {user.apellidos}</h2>
          <h4>{title}</h4>
          <p>{comment}</p>
      </div>
    );
  }
}

export default comment;