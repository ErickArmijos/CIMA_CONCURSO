import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import './LabsStyles.css';  // Importando el archivo CSS

const LabsComponent = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const [labs, setLabs] = useState([]);
  const [editLabId, setEditLabId] = useState(null);
  
  const onSubmit = (data) => {
    if (editLabId) {
      setLabs(labs.map(lab => lab.id === editLabId ? { ...data, id: editLabId } : lab));
      setEditLabId(null);
    } else {
      setLabs([...labs, { ...data, id: uuidv4() }]);
    }
    reset();
  };

  const handleEdit = (id) => {
    const lab = labs.find(l => l.id === id);
    reset(lab);
    setEditLabId(id);
  };

  const handleDelete = (id) => {
    setLabs(labs.filter(l => l.id !== id));
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
          <label>Equipos Disponibles</label>
          <input 
            type="number"
            name="equipos"
            placeholder="Ingrese el número de equipos disponibles"
            {...register("equipos", { required: "Equipos disponibles es requerido" })}
          />
          {errors.equipos && <small className="errorValidate">{errors.equipos.message}</small>}
        </div>

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
            <button onClick={() => handleEdit(lab.id)} className="btn edit-btn">Editar</button>
            <button onClick={() => handleDelete(lab.id)} className="btn delete-btn">Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabsComponent;
