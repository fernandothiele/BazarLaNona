import connection from './coneccion';

// CREATE TABLE Inventario ( // tabla inventraio(Procuctos)
//     codigo_producto INT PRIMARY KEY NOT NULL,
//     nombre_producto VARCHAR(255) NOT NULL,
//     informacion VARCHAR(255) NOT NULL,
//     precio_unitario DECIMAL(10, 2) NOT NULL,
//     cantidad INT NOT NULL
//   );

export default async function añadirProducto(producto: any){
    try {
        const query = `INSERT INTO Inventario (codigo_producto, nombre_producto, informacion, precio_unitario, cantidad) 
                        VALUES ('${producto.codigo_producto}', '${producto.nombre_producto}', '${producto.informacion}', '${producto.precio_unitario}', '${producto.cantidad}')`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}