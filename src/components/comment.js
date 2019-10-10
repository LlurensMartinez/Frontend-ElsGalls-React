import React, { Component } from 'react';

class comment extends Component {
  
  render() {
    const {comment, title, user} = this.props.comments;
    return (
      <div class="commentContainer">
          <h3>FOTO PERFIL</h3>
          <h2>{user.nombre} {user.apellidos}</h2>
          <h4>{title}</h4>
          <p>{comment}</p>
      </div>
    );
  }
}

export default comment;