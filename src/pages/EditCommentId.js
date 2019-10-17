import React, { Component } from 'react';
import FormComment from '../components/formComment'
import CommentService from '../lib/comment-service'

class EditCommentId extends Component {

  state = {
    title: "",
    comment: "",
    token: localStorage.token,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    let id = this.props.match.params.id

    const { title, comment, token} = this.state

    CommentService.putComment({ id, title, comment, token})
      .then((data) => {
        //titulo comentario usuario
        this.props.history.push("/admin/comment/edit");
        return;
      })
      .catch(error => console.log(error))
  }


  render() {
    const {title, comment } = this.state
    return (
      <div>
        <FormComment 
          submit = {this.handleFormSubmit}
          comment = {comment}
          title = {title}
          change = {this.handleChange}
      />
      </div>
    );
  }
}

export default EditCommentId;