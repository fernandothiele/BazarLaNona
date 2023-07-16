import React, { useState, useEffect } from 'react';
// CREATE TABLE Venta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     nombre_empleado varchar(255) NOT NULL,
//     fecha DATE NOT NULL,
//     tipo_documento VARCHAR(20) NOT NULL,
    
//     FOREIGN KEY (nombre_empleado) REFERENCES Cuenta(nombre_usuario)
//   );

// luego de generar la Venta,  añadir el registro de la boleta a la tabla venta
// CREATE TABLE Boleta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     fecha DATE NOT NULL,
//     venta INT NOT NULL,
//     total_pagar DECIMAL(10, 2) NOT NULL,
    
//     FOREIGN KEY (venta) REFERENCES Venta(codigo)
//   );

export default function Boleta({ caja }) {
  if (caja === "Cerrada") {
    return (
      <>
        <h1>Caja Cerrada</h1>
        <h3>El jefe de venta debe abrir la Caja</h3>
      </>
    );
  }

  const [total_final, setTotalFinal] = useState(0);
  const [inventario, setInventario] = useState([]);
  const [idVenta, setIdVenta] = useState(0);

  useEffect(() => {
    // Simulación de obtención de inventario desde la base de datos
    const obtenerInventario = async () => {
      let inven = window.consultar.consultarInv().then((res) => {
        console.log("Resultado",res[0]);
        setInventario(res[0]);
        
      });
    };

    obtenerInventario();
  }, []);

  async function handleBoleta(e) {
    e.preventDefault();
    const nombre_empleado = "pruebacuenta"; // sessionStorage.getItem('token');
    const fecha = '2021-06-01';
    const tipo_documento = "Boleta";
  
    const venta = { nombre_empleado, fecha, tipo_documento };
    console.log("Data", venta);
    try {
      const resVenta = await window.Venta.añadirVenta(venta);
      console.log("Resultado Id", resVenta[0].insertId);
      setIdVenta(resVenta[0].insertId);
  
      const boleta = { fecha, idVenta: resVenta[0].insertId, total_final }; // to-do: añadir a la base de datos la boleta
      console.log("Boleta", boleta);
      await window.Boleta.añadirBoleta(boleta);
    } catch (error) {
      console.log("Error al registrar:", error);
    }
    await setTotalFinal(0);
  }

  function handleProductoSeleccionado(e) {
    const productoPrecio = Number(e.target.value);
    if (productoPrecio > 0) {
      let producto = document.createElement("div");
      let nombreP = document.createElement("p");
      nombreP.innerHTML = e.target.options[e.target.selectedIndex].text;
      let precioP = document.createElement("p");
      precioP.innerHTML = productoPrecio;
      producto.appendChild(nombreP);
      producto.appendChild(precioP);
  
      let elmbtn = document.createElement("button");
      elmbtn.innerHTML = "Eliminar";
      elmbtn.id = "btnEliminar";
      elmbtn.onclick = function () {
        setTotalFinal((prevTotal) => prevTotal - productoPrecio);
        producto.remove();
      };
      producto.appendChild(elmbtn);
  
      document.getElementById("InventarioBoleta").appendChild(producto);
  
      setTotalFinal((prevTotal) => prevTotal + productoPrecio);
    }
  }

  return (
    <>
      <h1>Generar Boleta</h1>
      <form onSubmit={handleBoleta} id="form">
        <select name="productos" id="productos" onChange={handleProductoSeleccionado}>
          <option value="0" id={0}>Seleccione un producto</option>
          {inventario.map((producto) => (
            <option
              id={producto.codigo_producto}
              key={producto.codigo_producto}
              value={producto.precio_unitario}
            >
              {producto.nombre_producto}
            </option>
          ))}
        </select>
        <input type="submit" value="Generar Boleta" />
      </form>
      
        {/* Seccion visible para el usuario */}
        <div id="InventarioBoleta">
            <h1>Boleta</h1>
            <h2 id="total">Precio a Pagar: {total_final}</h2>
        </div>
        
    </>
  );
}
