import connection from "./coneccion";

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


export default async function añadirFactura(factura: any) {
    try {
        const query = `INSERT INTO Factura (fecha, venta, razon_social, rut_cliente, giro, direccion, total_neto, iva, total_final) 
                            VALUES ('${factura.fecha}', '${factura.venta}', '${factura.razon_social}', '${factura.rut_cliente}', '${factura.giro}', '${factura.direccion}', '${factura.total_neto}', '${factura.iva}', '${factura.total}')`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}