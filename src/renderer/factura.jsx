import React from "react";

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
// luego de generar la factura, se debe actualizar el stock de los productos y añadir el registro de la factura a la tabla venta
// CREATE TABLE Venta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     nombre_empleado varchar(255) NOT NULL,
//     fecha DATE NOT NULL,
//     tipo_documento VARCHAR(20) NOT NULL,
    
//     FOREIGN KEY (nombre_empleado) REFERENCES Cuenta(nombre_usuario)
//   );
  

export default function Factura() {
    return (
        <>
        <h1>Factura</h1>
        <p>Esta página solo puede ser accedida después de iniciar sesión</p>
        </>
    );
}