import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class listComments extends Component {
  
  render() {
    const { comment, title, _id } = this.props.comments;
    return (
      <div className="commentContainer">
          <h2>{comment}</h2>
          <h4>{title}</h4>
          <Link class="waves-effect waves-light btn-large" to={`/admin/comment/edit/${_id}`}>EDITAR COMENTARIO</Link>
      </div>
    );
  }
}

export default listComments;