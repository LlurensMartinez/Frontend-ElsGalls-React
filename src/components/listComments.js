import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class listComments extends Component {
  
  render() {
    const { comment, title, _id} = this.props.comments;
    const { onClick } = this.props;
    return (
      <div className="commentContainer">
          <h2>{title}</h2>
          <h4>{comment}</h4>
          <Link to={`/admin/comment/edit/${_id}`}><i class="small material-icons">edit</i></Link>
          <a href="#" onClick = {onClick}><i class="small material-icons">delete_forever</i></a>
      </div>
    );
  }
}

export default listComments;