import React from "react";
import useCaja from './cajaToken.jsx';
import { useEffect } from "react";


export default function Caja(prop){
    
    
    function abrirCaja(){
        prop.setCaja("Abierta")
    }

    function cerrarCaja(){
        prop.setCaja("Cerrada")
    }

    return (
        <>
        {prop.caja === "Abierta" ? (
            <button onClick={cerrarCaja} id="button_caja_abierta">Cerrar Caja</button>
        ):(
            <button onClick={abrirCaja} id="button_caja_cerrada">Abrir Caja</button>
        )}
        </>
    );
}
