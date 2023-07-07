import React, { useState, useEffect } from "react";

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [tipoCuenta, setTipoCuenta] = useState('');


  //use effect para tipo de cuenta automaticamente es tipo empleado
  useEffect(() => {
    setTipoCuenta("empleado");
  },[]);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password,tipoCuenta);

    const user = {
      nombre: username,
      contraseña: password,
      tipo_cuenta: tipoCuenta,
    };

    try{
      window.registrar.registerUser(user)
    }
    catch(error){
      console.log("Error al registrar:",error)
    } finally {
      setUsername('');
      setPassword('');
      setTipoCuenta('');
    }
  };

  function mostrarContraseña(){
    var tipo = document.getElementById("password");
    if(tipo.type === "password"){
      tipo.type = "text";
    }else{
      tipo.type = "password";
    }
  }

  return (
    <>
      <h1>Register Page</h1>
      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            required
            minLength={3}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            required
            minLength={8}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="mostrar">Mostrar Contraseña</label>
          <input type="checkbox" name="mostrar" id="mostrar" onClick={mostrarContraseña}/>
        </div>
        <div>
        <label htmlFor="tipoCuenta">Tipo de Cuenta</label>
          <select name="tipoCuenta" id="tipoCuenta"
            value={tipoCuenta}
            required
            onChange={(e) => {setTipoCuenta(e.target.value);console.log(e.target.value);console.log("Tipo de Cuenta",tipoCuenta)}}
            >
            <option value="empleado">Empleado</option>
            <option value="jefedeventa">Jefe de Venta</option>
          </select>
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
