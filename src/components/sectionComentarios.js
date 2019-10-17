import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Comment from './comment';
import CommentService from '../lib/comment-service'

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

class sectionComentarios extends Component {
  
  state = {
    comments: []
  }

  componentDidMount(){
   this.getCommentsList();
  }

  getCommentsList = async () => {
    await CommentService.getAllComments(localStorage.logedUserId)
      .then((data) => {
        this.setState({
          comments: data.comments
        })
      })
      .catch(error => console.log(error))
  }

  sliceResultsAndMap = () =>{
    const{ comments } = this.state

    let sliceComments = comments.slice(comments.length -11, comments.length);
    return (sliceComments.map((comment, index) => 
              <div key={index}>
                  <Comment 
                      key={comment._id}
                      comments={comment}
                  />
              </div>))
  }

  render() {
    return (
      <section id="sectionComments">
        <div className="commentsContainer">
            <h3>ULTIMOS COMENTARIOS</h3>
            <p>*********</p>
            <Slider autoplay={5000}>
              {this.sliceResultsAndMap()}
            </Slider>
            <div class="btnCommentsContainer">
              <Link class="waves-effect waves-light btn-large" to={`/admin/comment`}>AÑADIR COMENTARIO</Link>
              <Link class="waves-effect waves-light btn-large" to={`/admin/comment/edit`}>EDITAR COMENTARIO</Link>
            </div>
        </div>
      </section>
    );
  }
}

export default sectionComentarios;