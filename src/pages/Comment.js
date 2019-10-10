import React, { Component } from 'react';
import CommentService from '../lib/comment-service'

class Comment extends Component {

  state = {
    title: "",
    comment: ""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { title, comment} = this.state

    CommentService.addComment({ title, comment})
      .then((data) => {
        if (data.comentario.title) {
          this.setState({
            title:"",
            comment:""
          });
          
        }
      })
      .catch(error => console.log(error))
  }
  render() {

    const {title, comment } = this.state
    return (
      <div class="row">
        <form class="col s12" onSubmit={this.handleFormSubmit}>
          <div class="row">
            <div class="input-field col s6">
              <input type="text" class="validate" name="title" value={title} onChange={this.handleChange}/>
              <label  className="active" for="first_name">Titulo</label>
            </div>
          </div>
             
          <div class="row">
            <div class="input-field col s6">
              <textarea id="textarea1" class="materialize-textarea" name="comment" value={comment} onChange={this.handleChange}></textarea>
              <label  className="active" for="textarea1">Comentario</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
            <input type="submit" value="COMENTA!" />
            </div>
          </div>
          
        </form>
      </div>
    );
  }
}

export default Comment;