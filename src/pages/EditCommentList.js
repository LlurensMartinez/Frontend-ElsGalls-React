import React, { Component } from 'react';
import CommentService from '../lib/comment-service'
import ListComments from '../components/listComments'

class editCommentList extends Component {

  state = {
    comments: []
  }

  componentDidMount(){
    this.getUserCommentsList();
   }

  getUserCommentsList = async () => {
    await CommentService.getAllComments()
      .then((data) => {
        this.setState({
          comments: data.comments
        })
      })
      .catch(error => console.log(error))
  }

  renderComentList= () =>{
    const {comments} = this.state

    const userComments = comments.filter(user => user.user._id === localStorage.logedUserId);

      return userComments.map((comment, index) => 
              
          <div key={index}>
              <ListComments 
                  key={comment._id}
                  comments={comment}
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