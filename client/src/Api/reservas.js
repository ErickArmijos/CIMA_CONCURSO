import axios from "./axios.js";

export const registerReserva = async (rese) =>axios.post("/reservaciones/nuevaReservacion", rese);
export const getReserva = async (user) => axios.get("/reservaciones/obtenerReservaciones", user);

