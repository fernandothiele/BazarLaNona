import React, { useEffect, useState } from "react";

export default function BusquedaVenta() {
  const [empleados, setEmpleados] = useState([]);
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    const obtenerEmpleados = async () => {
      let inven = window.empleados.consultarEmpleados().then((res) => {
        console.log("Resultado", res[0]);
        setEmpleados(res[0]);
      });
    };

    obtenerEmpleados();
  }, []);

  async function buscar(e) {
    e.preventDefault();
    const idVenta = e.target.idVenta.value;
    const empleado = e.target.empleados.value;
    const tipoDocumento = e.target.tipoDocumento.value;

    const busqueda = { idVenta, empleado, tipoDocumento };
    console.log("busqueda", busqueda);
    try {
      const resBusqueda = await window.buscarventa.consultarVentas(busqueda);
      console.log("Resultado Busqueda", resBusqueda[0][0]);
      setResultados(resBusqueda[0][0]);
    } catch (error) {
      console.log("Error", error);
    }
  }

  return (
    <>
      <h1>Busqueda de Venta</h1>
      <form onSubmit={buscar}>
        <input type="text" name="idVenta" placeholder="Ingrese el id de la venta" />
        <select name="empleados" id="empleados">
          <option value="0">Todos los Empleados</option>
          {empleados.map((empleado) => (
            <option id={empleado.nombre_usuario} key={empleado.nombre_usuario} value={empleado.nombre_usuario}>
              {empleado.nombre_usuario}
            </option>
          ))}
        </select>
        <select name="tipoDocumento" id="tipoDocumento">
          <option value="0">Todos los Tipos de Documento</option>
          <option value="Boleta">Boleta</option>
          <option value="Factura">Factura</option>
        </select>
        <input type="submit" value="Buscar" />
      </form>

      {resultados ? Object.keys(resultados).length !== 0 && (
        <table>
          <thead>
            <tr>
              {Object.keys(resultados).map((key) => {
                if (resultados[key] !== null) {
                  return <th key={key}>{key}</th>;
                }
                return null;
              })}
            </tr>
          </thead>
          <tbody>
            <tr>
              {Object.keys(resultados).map((key) => {
                if (resultados[key] !== null) {
                  if (key === "fecha") {
                    const fecha = new Date(resultados[key]);
                    return <td key={key}>{fecha.toLocaleDateString()}</td>;
                  }
                  return <td key={key}>{resultados[key]}</td>;
                }
                return null;
              })}
            </tr>
          </tbody>
        </table>
      ): <h3>No se encontraron resultados</h3>}
    </>
  );
}
