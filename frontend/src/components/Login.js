import React, { useState } from "react";
import axios from "axios";
import logo from "../assets/logo.png"; // ✅ Asegúrate de que exista

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:5001/api/usuarios/login", { email, password })
      .then((res) => {
        setMensaje("✅ Login exitoso");
        localStorage.setItem("usuario", JSON.stringify(res.data));
        onLogin(res.data);
      })
      .catch((err) => {
        setMensaje(" Credenciales incorrectas");
        console.error(err);
      });
  };

  return (
    <div className="login-container">

      <div className="login-card">
        <center><img src={logo} alt="Logo" className="login-logo" />

         <h2 className="login-title">Bienvenido</h2>
        <p className="login-subtitle">Inicia sesión para continuar</p>

        <form onSubmit={handleLogin}>

          <label>Email</label>
          <input
            type="email"
            value={email}
            placeholder="Ingresa tu correo"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label>Contraseña</label>
          <input
            type="password"
            value={password}
            placeholder="Ingresa tu contraseña"
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit" className="btn btn-primary login-btn">
            Entrar
          </button>
        </form>
        </center>

      {mensaje && <p className="login-error">{mensaje}</p>}
      </div>

    </div>
  );
}

export default Login;
