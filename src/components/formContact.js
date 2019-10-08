import React, { Component } from 'react';

class formContact extends Component {

  render() {
    return (
      <div className="row">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input id="first_name" type="text" className="validate" />
                <label className="active" for="first_name" >Nombre</label>
              </div>
              <div className="input-field col s6">
                <input id="last_name" type="text" className="validate"/>
                <label className="active" for="last_name">Apellido</label>
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <input id="email" type="email" className="validate"/>
                <label  className="active" for="email">Email</label>
              </div>
            </div>

            <div class="row">
              <div className="input-field col s12">
                <textarea id="textarea1" className="materialize-textarea"></textarea>
                <label className="active" for="textarea1">Comentario</label>
              </div>
            </div>

            <a className="waves-effect waves-light btn-large">ENVIAR COMENTARIO</a>

          </form>
  </div>
    );
  }
}

export default formContact;