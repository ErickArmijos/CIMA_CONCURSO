import axios from "./axios.js";

export const registerRequest = async (user) =>axios.post("/register", user);

export const loginRequest = async (user) => axios.post("/login", user);

export const verifyTokenRequest = async () => axios.get("/verify");

export const rolUserRequest = async (user) => axios.get("/rolUser",user)