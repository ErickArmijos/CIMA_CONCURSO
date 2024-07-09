import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import './LabsStyles.css';  // Importando el archivo CSS
import { registerLaboratorio, getLaboratorio, updateLaboratorio, deleteLaboratorio } from "../Api/laboratorios.js";

const LabsComponent = () => {
  const { register, handleSubmit, reset, setValue, formState: { errors } } = useForm();
  const [labs, setLabs] = useState([]);
  const [editLabId, setEditLabId] = useState(null);
  const [serverError, setServerError] = useState(null);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const response = await getLaboratorio();
        setLabs(response.data);
      } catch (error) {
        console.error("Error fetching labs:", error);
      }
    };

    fetchLabs();
  }, []);

  const onSubmit = async (data) => {
    try {
      if (editLabId) {
        await updateLaboratorio(editLabId, data);
        setEditLabId(null);
      } else {
        await registerLaboratorio(data);
      }
      reset();
      setServerError(null);

      // Fetch the updated list of labs
      const response = await getLaboratorio();
      setLabs(response.data);
    } catch (error) {
      setServerError(error.response ? error.response.data.message : 'Error del servidor. Intente de nuevo más tarde.');
    }
  };

  const handleEdit = (id) => {
    const lab = labs.find(l => l.id === id);
    setValue("nombre", lab.nombre);
    setValue("codigolab", lab.codigolab);
    setValue("capacidad", lab.capacidad);
    setValue("horario", lab.horario);
    setValue("equipos", lab.equipos);
    setEditLabId(id);
  };

  const handleDelete = async (id) => {
    try {
      await deleteLaboratorio(id);
      setLabs(labs.filter(l => l.id !== id));
    } catch (error) {
      console.error("Error deleting lab:", error);
    }
  };

  return (
    <div className="labs-container">
      <div className="header">
        <h1>Gestión de Laboratorios</h1>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-box">
          <label>Nombre del Laboratorio</label>
          <input 
            type="text"
            name="nombre"
            placeholder="Ingrese el nombre del laboratorio"
            {...register("nombre", { required: "Nombre es requerido" })}
          />
          {errors.nombre && <small className="errorValidate">{errors.nombre.message}</small>}
        </div>

        <div className="input-box">
          <label>Código de laboratorio</label>
          <input 
            type="text"
            name="codigolab"
            placeholder="Ingrese el código del laboratorio"
            {...register("codigolab", { required: "Código de laboratorio es requerido" })}
          />
          {errors.codigolab && <small className="errorValidate">{errors.codigolab.message}</small>}
        </div>

        <div className="input-box">
          <label>Capacidad</label>
          <input 
            type="number"
            name="capacidad"
            placeholder="Ingrese la capacidad"
            {...register("capacidad", { required: "Capacidad es requerida" })}
          />
          {errors.capacidad && <small className="errorValidate">{errors.capacidad.message}</small>}
        </div>

        <div className="input-box">
          <label>Horario</label>
          <input 
            type="text"
            name="horario"
            placeholder="Ingrese el horario"
            {...register("horario", { required: "Horario es requerido" })}
          />
          {errors.horario && <small className="errorValidate">{errors.horario.message}</small>}
        </div>

        <div className="input-box">
          <label>Equipos Disponibles</label>
          <input 
            type="number"
            name="equipos"
            placeholder="Ingrese el número de equipos disponibles"
            {...register("equipos", { required: "Equipos disponibles es requerido" })}
          />
          {errors.equipos && <small className="errorValidate">{errors.equipos.message}</small>}
        </div>

        {serverError && <div className="errorBack">{serverError}</div>}

        <button type="submit" className="btn">{editLabId ? 'Editar' : 'Agregar'} Laboratorio</button>
      </form>

      <h2>Lista de Laboratorios</h2>
      <ul className="labs-list">
        {labs.map(lab => (
          <li key={lab.id} className="lab-item">
            <div>
              <strong>Nombre:</strong> {lab.nombre}
            </div>
            <div>
              <strong>Capacidad:</strong> {lab.capacidad}
            </div>
            <div>
              <strong>Equipos Disponibles:</strong> {lab.equipos}
            </div>
            <div>
              <strong>Horario:</strong> {lab.horario}
            </div>
            <div className='botonesedit'>
              <button onClick={() => handleEdit(lab.id)} className="btn edit-btn">Editar</button>
              <button onClick={() => handleDelete(lab.id)} className="btn delete-btn">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabsComponent;
