import { stringify } from "querystring";
import React, { useState } from "react";

export default function Login({ setToken }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      nombre: username,
      contraseña: password
    };
    console.log(user)
    window.login.loginUser(user)
      .then(result => {
        // Credenciales válidas
        const token = String(user.nombre);
        setToken(token);
      })
      .catch(error => {
        // Credenciales inválidas
        console.log("Error al verificar credenciales:", error);
        // Manejar el error de autenticación aquí si es necesario
      });


  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
