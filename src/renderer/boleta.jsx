import React from "react";

export default function Boleta({caja}) {

    if (caja === "Cerrada") {
        return (
            <>
            <h1>Caja Cerrada</h1>
            <h3>El jefe de venta debe abrir la Caja</h3>
            </>
        )
    }


    return (
        <>
        <h1>Generar Boleta</h1>
        <p>caja abierta, proximamente podra generar una boleta</p>
        </>
    );
}