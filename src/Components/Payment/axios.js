import axios from "axios";


const instance = axios.create({
  baseURL: "https://limitless-hamlet-24521.herokuapp.com/",
});

export default instance;