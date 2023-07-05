import { stringify } from "querystring";
import React, { useState } from "react";

export default function Login(prop) {
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
        console.log("Result:", result[0].tipo_cuenta);
        const tipo = String(result[0].tipo_cuenta);
        prop.setToken(token);
        prop.setTipo(tipo);
      })
      .catch(error => {
        // Credenciales inválidas
        console.log("Error al verificar credenciales:", error);
        // Manejar el error de autenticación aquí si es necesario
      });


  };


  function mostrarContraseña() {
    var tipo = document.getElementById("password");
    if (tipo.type === "password") {
      tipo.type = "text";
    } else {
      tipo.type = "password";
    }
  }


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
          <label htmlFor="mostrar">Mostrar Contraseña</label>
          <input
            type="checkbox"
            name="mostrar"
            id="mostrar"
            onClick={mostrarContraseña}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
