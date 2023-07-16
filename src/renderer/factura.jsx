import React, { useState, useEffect } from 'react';
// Orden de inserción en la base de datos (MySQL) de las tablas involucradas:
// 1. Venta (se genera el id de la venta(idVenta)) para ingresarlo a la factura, esta tabla esta relacionada con la tabla Cuenta
// 2. Factura (se genera el id de la factura (idFactura)) para ingresarlo al detalle de la factura, esta tabla esta relacionada con la tabla Venta en el campo venta(idVenta)
// 3. DetalleFactura (se obtiene el id de la factura) para ingresarlo al detalle de la factura, esta tabla esta relacionada con la tabla Factura en el campo factura(idFactura) y con la
// tabla Inventario en el campo codigo_producto(idProducto)


// CREATE TABLE Venta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     nombre_empleado varchar(255) NOT NULL,
//     fecha DATE NOT NULL,
//     tipo_documento VARCHAR(20) NOT NULL,
    
//     FOREIGN KEY (nombre_empleado) REFERENCES Cuenta(nombre_usuario)
//   );
//--------------------------------------------------------------------------------
// CREATE TABLE Factura ( 
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     fecha DATE NOT NULL,
//     venta INT NOT NULL,
//     razon_social VARCHAR(255) NOT NULL,
//     rut_cliente VARCHAR(20) NOT NULL,
//     giro VARCHAR(255) NOT NULL,
//     direccion VARCHAR(255) NOT NULL,
//     total_neto DECIMAL(10, 2) NOT NULL,
//     iva DECIMAL(10, 2) NOT NULL,
//     total_final DECIMAL(10, 2) NOT NULL,

//     FOREIGN KEY (venta) REFERENCES Venta(codigo)
//   );
//--------------------------------------------------------------------------------
// CREATE TABLE DetalleFactura (
//     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     factura INT NOT NULL,
//     codigo_producto INT NOT NULL,
//     cantidad INT NOT NULL,
//     precio_unitario DECIMAL(10, 2) NOT NULL,
    
//     FOREIGN KEY (factura) REFERENCES Factura(codigo),
//     FOREIGN KEY (codigo_producto) REFERENCES Inventario(codigo_producto)
// );
//--------------------------------------------------------------------------------

export default function Factura({ caja }) {
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

  useEffect(() => {
    const obtenerInventario = async () => {
      let inven = window.consultar.consultarInv().then((res) => {
        console.log("Resultado", res[0]);
        setInventario(res[0]);
      });
    };

    obtenerInventario();
  }, []);

  async function handleFactura(e) {
    e.preventDefault();
    const nombre_empleado = sessionStorage.getItem('token').replace(/['"]+/g, '');
    const currentDate = new Date();
    const fecha = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(currentDate.getDate()).padStart(2, '0')}`;
    const tipo_documento = "Factura";

    const venta = { nombre_empleado, fecha, tipo_documento };
    console.log("Data", venta);

    const razon_social = e.target.razon.value ;
    const rut_cliente = e.target.rut.value;
    const giro = e.target.giro.value;
    const direccion = e.target.direccion.value;
    const total_neto = total_final;
    const iva = 0.19;
    const total = total_neto * (1 + iva);

    try {
        // insertar venta
      const resVenta = await window.Venta.añadirVenta(venta);
      console.log("Resultado Id", resVenta[0].insertId);
        // insertar factura
      const factura = {
        fecha,
        venta: resVenta[0].insertId,
        razon_social,
        rut_cliente,
        giro,
        direccion,
        total_neto,
        iva,
        total
      };
      console.log("Factura", factura);

      const resFactura = await window.factura.añadirFactura(factura);
      console.log("Factura Id", resFactura[0].insertId);
      // insertar detalle factura
      const detallesFactura = Array.from(document.querySelectorAll("#bolsa div"));
      for (const detalle of detallesFactura) {
        const codigo_producto = detalle.id;
        const cantidad = 1;
        const precio_unitario = parseFloat(detalle.children[1].innerHTML);

        const detalleFactura = { factura: resFactura[0].insertId, codigo_producto, cantidad, precio_unitario };
        console.log("Detalle Factura", detalleFactura);

        const resDetalleFactura = await window.detalle.añadirDetalleFactura(detalleFactura);
        console.log("Resultado Detalle Factura", resDetalleFactura[0].insertId);
      }

      console.log("Factura generada exitosamente.");

      setTotalFinal(0);
      document.getElementById("form").reset();
      document.getElementById("bolsa").innerHTML = "";
    } catch (error) {
      console.log("Error al generar la factura:", error);
    }
  }

  function handleProductoSeleccionado(e) {
    const productoPrecio = Number(e.target.value);
    if (productoPrecio > 0) {
      let producto = document.createElement("div");
        producto.id = e.target.options[e.target.selectedIndex].id;
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

      document.getElementById("bolsa").appendChild(producto);

      setTotalFinal((prevTotal) => prevTotal + productoPrecio);
    }
  }

  return (
    <>
        <h1>Generar Factura</h1>
        <form onSubmit={handleFactura} id="form">
        <input type="text" name="razon" id="razon" placeholder='Razon Social' />
        <input type="text" name="rut" id="rut" placeholder='Rut' />
        <input type="text" name="giro" id="giro" placeholder='Giro' />
        <input type="text" name="direccion" id="direccion" placeholder='Direccion' />
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
        {/* Seccion visible para el usuario */}
        <div id="InventarioFactura">
          <h1>Detalle Factura</h1>
          <h2 id="total_neto">Total Neto: {total_final}</h2>
          <h2 id='IVA'>IVA: 19%</h2>
          <h2 id="total">Total: {total_final * 1.19}</h2>
          <div id="bolsa"></div>
        </div>
        <input type="submit" value="Generar Factura" />
      </form>
    </>
  );
}
