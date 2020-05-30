import React, { Component } from 'react';
import CommentService from '../lib/comment-service'
import FormComment from '../components/formComment'
import Navbar from '../components/navbar'

class Comment extends Component {

  state = {
    title: "",
    comment: "",
    token: localStorage.token
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { token, title, comment} = this.state

    CommentService.addComment({ token, title, comment})
      .then((data) => {
        //titulo comentario usuario
        this.props.history.push("/admin");
        return;
      })
      .catch(error => console.log(error))
  }
  render() {
    const {title, comment } = this.state
    return (
      <>
        <Navbar />
        <div className="formCommentContiner">
          <FormComment 
              submit = {this.handleFormSubmit}
              comment = {comment}
              title = {title}
              change = {this.handleChange}
          />
        </div>
      </>
    );
  }
}

export default Comment;