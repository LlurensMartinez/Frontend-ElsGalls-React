import React, { Component } from 'react';
import LoginService from '../lib/login-service'



class Login extends Component {

  state = {
    email: "",
    password: "",
    token:"",
    message:this.props.location.state ? this.props.location.state.message : "",
  }


  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    LoginService.login({ email, password })
      .then((data) => {
        localStorage.setItem('token', data.token);
        localStorage.setItem('logedUserId', data.usuario._id);
        localStorage.setItem('nameUser', data.usuario.nombre);
        localStorage.setItem('surnamesUser', data.usuario.apellidos);
        localStorage.setItem('emailUser', data.usuario.email);
        localStorage.setItem('img', data.usuario.img);

        this.props.history.push("/admin");
        return;
      })
      .catch(error => console.log(error))
  }

  signOut = () => {
    var auth2 = window.gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }

  render() {
    const {email, password} = this.state
    return (
      <div class="row">
        <form class="col s12" onSubmit={this.handleFormSubmit}>

          <div class="row">
            <div class="input-field col s6">
              <input id="email" type="email" class="validate" name="email" value={email}  onChange={this.handleChange}/>
              <label className="active" for="email">Email</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
              <input id="password" type="password" class="validate" name="password" value={password} onChange={this.handleChange}/>
              <label  className="active" for="password">Password</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
            <input type="submit" value="LOGIN" />
            </div>
          </div>
          <p>{this.state.message}</p>
        </form>
      <div class="g-signin2" data-onsuccess="onSignIn"></div>
      <a href="#" onClick={this.signOut}>Sign out</a>
      
      </div>
    );
  }
}

export default Login;