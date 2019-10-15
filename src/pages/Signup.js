import React, { Component } from 'react';
import SignupService from '../lib/signUp-service'


class Signup extends Component {

  state = {
    firstname: "",
    surnames:"",
    email:"",
    password: "",
    confirmPassword:"",
    error:""
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const { error, firstname, surnames, email, password, confirmPassword } = this.state;
    
    if( password === confirmPassword){
    
    this.setState({
      error:""
    })

    SignupService.signup({ error, firstname, surnames, email, password, confirmPassword })
      .then((data) => {
        if (data.usuario.email) {
          this.setState({
            firstname: "",
            surnames:"",
            email:"",
            password: "",
            confirmPassword:"",
            error:""
          });
        }
        this.props.history.push("/");
        return;
      })
      .catch(error => console.log(error))
    } else {
      this.setState({
        error:"Las contraseñas no coinciden"
      })
    }
}
  render() {

    const { error, firstname, surnames, email, password, confirmPassword } = this.state;

    return (
      <div class="row">
        <form class="col s12" onSubmit={this.handleFormSubmit}>
          <div class="row">
            <div class="input-field col s6">
              <input id="first_name" type="text" class="validate" name="firstname" value={firstname} onChange={this.handleChange}/>
              <label  className="active" for="first_name">Nombre</label>
            </div>
          </div>   
          <div class="row">
            <div class="input-field col s6">
              <input id="last_name" type="text" class="validate" name="surnames" value={surnames} onChange={this.handleChange}/>
              <label  className="active" for="last_name">Apellidos</label>
            </div>
           </div>
          <div class="row">
            <div class="input-field col s6">
              <input id="email" type="email" class="validate" name="email" value={email} onChange={this.handleChange}/>
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
              <input id="password" type="password" class="validate" name="confirmPassword" value={confirmPassword} onChange={this.handleChange}/>
              <label className="active" for="password">confirmPassword</label>
            </div>
          </div>

          <div class="row">
            <div class="input-field col s6">
            <input type="submit" value="REGÍSTRATE" />
            </div>
          </div>
          
        </form>
        {error}
      </div>
    );
  }
}

export default Signup;