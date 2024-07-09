import axios from "./axios.js";

export const registerLaboratorio = async (rese) =>axios.post("/lab/registerlab", rese);

export const getLaboratorio = async () => axios.get("/lab/traerlab");

export const updateLab = async (a) => axios.put("/lab/editarLab", a);


export const updateLaboratorio = (id, data) => {
    return axios.put(`/lab/editarLab/${id}`, data);
  };

  export const deleteLaboratorio = (id) => {
    return axios.delete(`/lab/eliminarLab/${id}`);
  };