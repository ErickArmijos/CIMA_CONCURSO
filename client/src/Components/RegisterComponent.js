import { useEffect } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./RegisterStyles.css";
import { UseAuth } from "../Context/authContext.js";

const RegisterComponent = () => {
  const { register: registerLogin, handleSubmit: handleSubmitLogin, formState: { errors: errorsLogin } } = useForm();
  const { register: registerRegister, handleSubmit: handleSubmitRegister, formState: { errors: errorsRegister }, watch } = useForm();

  const { signUp, logIn, isAuthenticated, errors: registerErrors = [] } = UseAuth();

  const onSubmitLogin = async (data) => {
    console.log(data);
    await logIn(data);
  };

  const onSubmitRegister = async (data) => {
    console.log(data);
    await signUp(data);
  };

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/laboratorios");
  }, [isAuthenticated, navigate]);

  const validateAge = (value) => {
    const today = new Date();
    const birthDate = new Date(value);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age >= 18 && age <= 100 || "Debe tener entre 18 y 100 años";
  };

  return (
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img
            src="https://oficina.espoch.edu.ec/dtic/images/3.jpg"
            alt=""
          />
        </div>
        <div className="back">
          <img
            className="backImg"
            src="https://i.ytimg.com/vi/K7aQgWWc8uE/maxresdefault.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Inicio de sesión</div>

            <form onSubmit={handleSubmitLogin(onSubmitLogin)}>
              
            {registerErrors && registerErrors.map((error, i) => (
              <div className="errorBack" key={i}>
                {error.message ? error.message : JSON.stringify(error)}
              </div>
            ))}

              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email_login"
                    placeholder="Ingrese su email"
                    {...registerLogin("email", { required: "Email es requerido" })}
                  />
                </div>
                {errorsLogin.email && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsLogin.email.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="contraseña_login"
                    placeholder="Ingrese su contraseña"
                    {...registerLogin("contraseña", { required: "Contraseña es requerida" })}
                  />
                </div>
                {errorsLogin.contraseña && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsLogin.contraseña.message}
                  </small>
                )}
                <div className="button input-box">
                  <input type="submit" value="Ingresar" />
                </div>
                <div className="text sign-up-text">
                  ¿No tiene una cuenta? <label htmlFor="flip">Regístrese ahora</label>
                </div>
              </div>
            </form>
          </div>

          <div className="signup-form">
            <div className="title">Registro</div>
            <form onSubmit={handleSubmitRegister(onSubmitRegister)}>
            {registerErrors && registerErrors.map((error, i) => (
              <div className="errorBack" key={i}>
                {error.message ? error.message : JSON.stringify(error)}
              </div>
            ))}
              <div className="input-boxes">
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="nombre_RU"
                    placeholder="Ingrese su nombre"
                    {...registerRegister("nombres", { required: "Nombre es requerido" })}
                  />
                </div>
                {errorsRegister.nombres && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.nombres.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <input
                    type="text"
                    name="apellidos"
                    placeholder="Ingrese su apellido"
                    {...registerRegister("apellidos", { required: "Apellido es requerido" })}
                  />
                </div>
                {errorsRegister.apellidos && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.apellidos.message}
                  </small>
                )}
                {/* Seleccion del rol  */}
                <div className="input-box">
                  <i className="fas fa-user"></i>
                  <select className="input-box"
                    name="role" 
                    {...registerRegister("role", { required: "Rol es requerido" })}
                  >
                    <option value="">Seleccione un rol</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesor">Profesor</option>
                    <option value="personal_administrativo">Personal Administrativo</option>
                  </select>
                </div>
                {errorsRegister.rol && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.rol.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-calendar-alt"></i>
                  <input
                    type="date"
                    name="fecha_nac_RU"
                    placeholder="Ingrese su fecha de nacimiento"
                    {...registerRegister("fecha_nacimiento", { required: "Fecha de nacimiento es requerida", validate: validateAge })}
                  />
                </div>
                {errorsRegister.fecha_nacimiento && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.fecha_nacimiento.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-phone-alt"></i>
                  <input
                    type="text"
                    name="telefono_RU"
                    placeholder="Ingrese su número de teléfono"
                    maxLength="10"
                    {...registerRegister("telefono", { required: "Teléfono es requerido" })}
                  />
                </div>
                {errorsRegister.telefono && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.telefono.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-envelope"></i>
                  <input
                    type="email"
                    name="email"
                    placeholder="Ingrese su email"
                    {...registerRegister("email", { required: "Email es requerido" })}
                  />
                </div>
                {errorsRegister.email && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.email.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="contraseña"
                    placeholder="Ingrese su contraseña"
                    {...registerRegister("contraseña", { required: "Contraseña es requerida" })}
                  />
                </div>
                {errorsRegister.contraseña && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.contraseña.message}
                  </small>
                )}
                <div className="input-box">
                  <i className="fas fa-lock"></i>
                  <input
                    type="password"
                    name="contraseña_repetir"
                    placeholder="Repita su contraseña"
                    {...registerRegister("contraseña_repetir", {
                      required: "Confirmar contraseña es requerido",
                      validate: value =>
                        value === watch('contraseña') || "Las contraseñas no coinciden"
                    })}
                  />
                </div>
                {errorsRegister.contraseña_repetir && (
                  <small className="errorValidate" style={{ color: "red" }}>
                    {errorsRegister.contraseña_repetir.message}
                  </small>
                )}
                <div className="button input-box">
                  <input type="submit" value="Registrarme" />
                </div>
                <div className="text sign-up-text">
                  ¿Ya dispone de una cuenta? <label htmlFor="flip">Inicie sesión</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterComponent;
