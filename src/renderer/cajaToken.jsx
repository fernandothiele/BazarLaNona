import { useState } from 'react';

export default function useCaja() {
  const [caja, setCaja] = useState(null);

  const getToken = () => {
    let cajaToken;
    try {
      const tokenString = localStorage.getItem('estado_caja');
      cajaToken = JSON.parse(tokenString);
    } catch (error) {
      console.log("Error", error);
      cajaToken = "Cerrada";
    }
    if (cajaToken) {
      return cajaToken;
    } else {
      setCaja("Cerrada");
      return "Cerrada";
    }
  };

  useState(() => {
    setCaja(getToken());
  }, []);

  const saveTipo = caja => {
    localStorage.setItem('estado_caja', JSON.stringify(caja));
    setCaja(caja);
  };

  return {
    setCaja: saveTipo,
    caja
  };
}
