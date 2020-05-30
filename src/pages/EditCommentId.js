import React, { Component } from 'react';
import FormComment from '../components/formComment'
import CommentService from '../lib/comment-service'
import Navbar from '../components/navbar'

class EditCommentId extends Component {

  state = {
    title: "",
    comment: "",
    token: localStorage.token,
  };

  componentDidMount(){
    this.getInfoComment();
  }

  getInfoComment = () => {

    let id = this.props.match.params.id

    CommentService.getComment(id)
      .then((data) => {
        this.setState({
          title: data.comentario.title,
          comment: data.comentario.comment
        })
        return;
      })
      .catch(error => console.log(error))
  }

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
      <>
      <Navbar />
      <div className="editCommentIdContainer">
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

export default EditCommentId;