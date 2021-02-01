import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-85892.firebaseio.com/",
});

export default instance;
