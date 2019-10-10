import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class sectionComentarios extends Component {
  render() {
    return (
      <section className="sectionComments">
        <div className="commentsContainer">
            <h3>COMENTARIOS</h3>
            <p>*********</p>
            <div className="bxslider">
              <div class="comment">
                <h2>Llorenç Martinez</h2>
                <h3>Full Stack Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia nostrum nisi obcaecati exercitationem velit earum consequatur maxime totam tempora, ad quas distinctio fugit eveniet quae animi? Laborum, sunt magnam.</p>
              </div>
              <div class="comment">
                <h2>Llorenç Martinez</h2>
                <h3>Full Stack Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia nostrum nisi obcaecati exercitationem velit earum consequatur maxime totam tempora, ad quas distinctio fugit eveniet quae animi? Laborum, sunt magnam.</p>
              </div>
              <div class="comment">
                <h2>Llorenç Martinez</h2>
                <h3>Full Stack Developer</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur mollitia nostrum nisi obcaecati exercitationem velit earum consequatur maxime totam tempora, ad quas distinctio fugit eveniet quae animi? Laborum, sunt magnam.</p>
              </div>
            </div>
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