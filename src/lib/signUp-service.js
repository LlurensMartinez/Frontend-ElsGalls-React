import axios from 'axios';

class SignupService {
  constructor() {
    this.sign = axios.create({
      baseURL: process.env.REACT_APP_BACKEND_URL,
      withCredentials: true // only beacause we want to share cookies with the backend server otherwise set it to false
    })
  }

  signup(user) {
    const { firstname, surnames, email, password, confirmPassword } = user;
    return this.sign.post('/usuario', {firstname, surnames, email, password, confirmPassword})
      .then(({ data }) => data);
      // Enviamos los datos al frontend
  }

}

const signupService = new SignupService();

export default signupService;