import axios from "./axios.js";

export const registerRequest = async (user) =>axios.post("/api/register", user);

export const loginRequest = async (user) => axios.post("/api/login", user);

export const verifyTokenRequest = async () => axios.get("/api/verify");

export const rolUserRequest = async (user) => axios.get("/api/rolUser",user)