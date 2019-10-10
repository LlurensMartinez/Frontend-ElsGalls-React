import React, { Component } from 'react';
import LoginService from '../lib/login-service'
import { GoogleLogout, GoogleLogin } from 'react-google-login';

const responseGoogle = (response) => {
  console.log(response);
}

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
        this.props.history.push("/admin");
        return;
      })
      .catch(error => console.log(error))
  }

  onSignIn() {
    var xhr = new XMLHttpRequest();
    // url /google biene del post Login
    xhr.open('POST', '/google');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
      console.log('Signed in as: ' + xhr.responseText);
    };
    // xhr.send('idtoken=' + id_token);
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

        <GoogleLogin
          clientId="552773007315-5bs1vem54dgc8b6bcrvm4qi06lha0nk1.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={(response) => {
            var id_token = response.getAuthResponse().id_token;

              console.log(id_token)

              LoginService.google({ id_token })
              .then((data) => {
                console.log(data)
              })
              .catch(error => console.log(error))

              // var xhr = new XMLHttpRequest();
              // // url /google biene del post Login
              // xhr.open('POST', '/google');
              // xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
              // xhr.onload = function() {
              //   console.log('Signed in as: ' + xhr.responseText);
              // };
              // xhr.send('idtoken=' + id_token);
          }}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <GoogleLogout
          clientId="552773007315-5bs1vem54dgc8b6bcrvm4qi06lha0nk1.apps.googleusercontent.com"
          buttonText="Logout"
          onLogoutSuccess={this.logout}
        />
         
      </div>
    );
  }
}

export default Login;