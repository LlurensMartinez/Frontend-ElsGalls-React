import axios from 'axios';

class CommentService {
  constructor() {
    this.comment = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  addComment(commentUser) {
    const { token,title, comment } = commentUser;
    return this.comment.post(`/comentario/${token}`, {title, comment})
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }


  getAllComments() {
    return this.comment.get(`/comentario/`)
      .then(({ data }) => data);
  }

  putComment(commentUser) {
    const { id, title, comment, token } = commentUser;
    return this.comment.put(`/comentario/${id}/${token}`, {title, comment, token})
      .then(({ data }) => data);
  }

  deleteComment(user) {
    const { id, token } = user;
    return this.comment.delete(`/comentario/${id}/${token}`)
      .then(({ data }) => data);
  }

}

const commentService = new CommentService();

export default commentService;