import { useState } from 'react';

export default function useTipo() {
  const getToken = () => {
    const tokenString = sessionStorage.getItem('tipo_cuenta');
    const userTipo = JSON.parse(tokenString);
    if (userTipo) {
      return userTipo;
    }
  };

  const [tipo, setTipo] = useState(getToken());

  const saveTipo = userTipo => {
    sessionStorage.setItem('tipo_cuenta', JSON.stringify(userTipo));
    
    setTipo(userTipo);
  };

  return {
    setTipo: saveTipo,
    tipo
  };
}
