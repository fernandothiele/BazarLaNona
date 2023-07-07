import { useState } from 'react';

export default function useCaja() {
  const getToken = () => {
    const tokenString = localStorage.getItem('estado_caja');
    const caja = JSON.parse(tokenString);
    if (caja) {
      return caja;
    } else {
      setCaja("Cerrada")
      return caja;
    }
  };

  const [caja, setCaja] = useState(getToken());

  const saveTipo = caja => {
    localStorage.setItem('estado_caja', JSON.stringify(caja));
    
    setCaja(caja);
  };

  return {
    setCaja: saveTipo,
    caja
  };
}
