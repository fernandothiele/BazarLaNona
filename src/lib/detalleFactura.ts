import connection from "./coneccion";

// CREATE TABLE DetalleFactura (
//     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     factura INT NOT NULL,
//     codigo_producto INT NOT NULL,
//     cantidad INT NOT NULL,
//     precio_unitario DECIMAL(10, 2) NOT NULL,
    
//     FOREIGN KEY (factura) REFERENCES Factura(codigo),
//     FOREIGN KEY (codigo_producto) REFERENCES Inventario(codigo_producto)
// );


export default async function añadirDetalleFactura(detalleFactura: any) {
    try {
        const query = `INSERT INTO DetalleFactura (factura, codigo_producto, cantidad, precio_unitario) 
                            VALUES ('${detalleFactura.factura}', '${detalleFactura.codigo_producto}', '${detalleFactura.cantidad}', '${detalleFactura.precio_unitario}')`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}