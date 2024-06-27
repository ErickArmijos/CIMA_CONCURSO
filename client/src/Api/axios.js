import axios from "axios";

const instance = axios.create({
  baseURL: "127.0.0.1:4000/api",
  withCredentials: true,
});

export default instance;


// export const registerRequest = user => axios.post(URL+"/register",user);
// export const loginRequest = user => axios.post(URL+"/login",user)
// export const verifyTokenRequest = async () => axios.get(URL+"/verify");