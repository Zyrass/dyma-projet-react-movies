import * as axios from "axios";

const apiFirebase = axios.create({
  baseURL: 'https://react-movie-3fcce.firebaseio.com/'
});

export default apiFirebase;