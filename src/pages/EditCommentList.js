import React, { Component } from 'react';
import CommentService from '../lib/comment-service'
import ListComments from '../components/listComments'

class editCommentList extends Component {

  state = {
    comments: [],
    token: localStorage.token,
    message: ""
  }

  componentDidMount(){
    this.getUserCommentsList();
   }

  getUserCommentsList = () => {
    CommentService.getAllComments()
      .then((data) => {
        this.setState({
          comments: data.comments
        })
      })
      .catch(error => console.log(error))
  }

  deleteComment = (id) => {
    const {token} = this.state
    CommentService.deleteComment( {id, token} )
      .then((data) => {
        this.setState({
          message: data.message
        })
        this.getUserCommentsList();
      })
      .catch(error => console.log(error))
  }

  renderComentList = () =>{
    const {comments} = this.state

    const userComments = comments.filter(user => user.user._id === localStorage.logedUserId);

      return userComments.map((comment, index) => 
              
          <div key={index}>
              <ListComments 
                  key={comment._id}
                  comments={comment}
                  onClick= {()=> this.deleteComment(comment._id)}
              />
          </div>)
  }
  render() {
    return (
      
      <div className="commentsContainer">
            <h3>TUS COMENTARIOS</h3>
            <p>*********</p>
            {this.renderComentList()}
            <div class="btnCommentsContainer">
            </div>
        </div>
    );
  }
}

export default editCommentList;