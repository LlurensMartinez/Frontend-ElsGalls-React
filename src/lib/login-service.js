import axios from 'axios';

class LoginService {
  constructor() {
    this.log = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  login(user) {
    const { email, password  } = user;
    return this.log.post('/login', { email, password })
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }

  google(token) {
    return this.log.post('/google', { token })
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }

}

const loginService = new LoginService();

export default loginService;