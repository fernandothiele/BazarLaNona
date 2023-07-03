import React, { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(username, password, email);

    const user = {
      nombre: username,
      contraseña: password,
      correo: email
    };

    try{
      window.registrar.registerUser(user)
    }
    catch(error){
      console.log("Error al registrar:",error)
    } finally {
      setUsername('');
      setPassword('');
      setEmail('');
    }

  };

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
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
}
