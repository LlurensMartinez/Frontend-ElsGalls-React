import React, { Component } from 'react';
import ProfileService from '../lib/profile-service'

class EditProfile extends Component {

  state = {
    id: localStorage.logedUserId,
    firstname: localStorage.nameUser,
    surnames: localStorage.surnamesUser,
    img: "",
    urlImg: localStorage.urlImg,
    password: "",
    confirmPassword:"",
    token: localStorage.token,
    file: null,
    error:""
  };

  componentDidMount () {
    this.getUserImage();
  }

  getUserImage = () => {
    const { imgUser } = localStorage
    ProfileService.userImage(imgUser)
      .then((data) => {
        localStorage.setItem('urlImg', data);
        this.setState({
          urlImg: data
        })
      })
      .catch(error => console.log(error))
  }

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    
  }

  _handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let fileUpload = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: fileUpload,
        imagePreviewUrl: reader.result,
        img: fileUpload.name
      });
    }

    reader.readAsDataURL(fileUpload);
  }

  handleFormImgSubmit = (e) => {
    const { id, token, img, file } = this.state
    e.preventDefault();

    ProfileService.editImg({ id, img, token, file })
      .then((data) => {
        localStorage.setItem('imgUser', data.usuario.img);
      })
      .catch(error => console.log(error))
  }
  
  handleFormSubmit = (event) => {
    event.preventDefault();
    const { id, token, firstname, surnames, img } = this.state

     ProfileService.editUser({ id, token, firstname, surnames, img })
      .then((data) => {
        localStorage.setItem('nameUser', data.usuario.nombre);
        localStorage.setItem('surnamesUser', data.usuario.apellidos);
        localStorage.setItem('img', data.usuario.img);
        this.props.history.push("/admin");
        return;
      })
      .catch(error => console.log(error));

  }

  render() {
    console.log(localStorage)

    let { imagePreviewUrl,firstname, surnames, password, confirmPassword } = this.state;

    let imgProfile = `${process.env.REACT_APP_BACKEND_URL}/imagen/usuarios/${localStorage.imgUser}`

    return (
      <div className="row">
      <img src={imgProfile} alt="IMAGEN"/>
      <img className="imgEditProfile" src={imagePreviewUrl} alt="Imagen de perfil"/>

      <form  onSubmit={this.handleFormImgSubmit} encType="multipart/form-data" action="">
          <input type="file" onChange={this._handleImageChange} name="file" className="filetype" id="group_image"/> 
          <input type="submit" value="upload"></input>
      </form>

        <form onSubmit={this.handleFormSubmit}>
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
      </div>
    );
  }
}

export default EditProfile;