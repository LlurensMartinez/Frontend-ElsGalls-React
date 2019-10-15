import axios from 'axios';

class ProfileService {
  constructor() {
    this.user = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  
  editImg(imgUser) {
    const { id, token, file, } = imgUser;

    var formData = new FormData();
    formData.append('file', file);
    
    const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
    }
    return this.user.put(`/upload/usuarios/${id}`, formData, config)
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }

  editUser(user) {
    const { id, token, firstname, surnames, img } = user
    return this.user.put(`/usuario/${id}/${token}`, {firstname, surnames, img})
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }

  userImage(imgUser) {
    return this.user.get(`/imagen/usuarios/${imgUser}`)
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }

}

const profileService = new ProfileService();

export default profileService;