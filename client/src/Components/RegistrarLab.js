import React from "react";
import "./res.css";

const LabTableComponent = () => {
  // Ejemplo de datos de laboratorio
  const labs = [
    { codigo: 1, nombre: "Laboratorio A", capacidad: 30, horario: "Lunes a Viernes 8:00 - 17:00", equipos: ["PCs", "Proyector"] },
    { codigo: 2, nombre: "Laboratorio B", capacidad: 20, horario: "Lunes a Viernes 9:00 - 18:00", equipos: ["Laptops", "Impresoras"] },
    { codigo: 3, nombre: "Laboratorio C", capacidad: 25, horario: "Lunes a Viernes 7:00 - 16:00", equipos: ["Tablets", "Tableros Interactivos"] },
  ];

  const handleReserveClick = (codigo) => {
    // Lógica para reservar el laboratorio con el código dado
    console.log(`Reservando laboratorio ${codigo}`);
    // Aquí puedes implementar la lógica para reservar el laboratorio
  };

  return (
    <div className="lab-table-container">
      <div className="lab-table">
        <table>
          <thead>
            <tr>
              <th>Código</th>
              <th>Nombre</th>
              <th>Capacidad</th>
              <th>Horario</th>
              <th>Equipos</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {labs.map((lab) => (
              <tr key={lab.codigo}>
                <td>{lab.codigo}</td>
                <td>{lab.nombre}</td>
                <td>{lab.capacidad}</td>
                <td>{lab.horario}</td>
                <td>{lab.equipos.join(", ")}</td>
                <td>
                  <button onClick={() => handleReserveClick(lab.codigo)}>Reservar</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LabTableComponent;
