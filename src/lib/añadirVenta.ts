import connection from './coneccion';

// CREATE TABLE Venta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     nombre_empleado varchar(255) NOT NULL,
//     fecha DATE NOT NULL,
//     tipo_documento VARCHAR(20) NOT NULL,
    
//     FOREIGN KEY (nombre_empleado) REFERENCES Cuenta(nombre_usuario)
//   );

export default async function añadirVenta(venta:any){
    try{
        const query = `INSERT INTO Venta (nombre_empleado, fecha, tipo_documento) VALUES ('${venta.nombre_empleado}', '${venta.fecha}', '${venta.tipo_documento}')`;
        const result = await (await connection).query(query);
        console.log("--------------------------------")
        console.log("Venta añadida")
        console.log(result);
        console.log("--------------------------------")
        return result;
    }catch(error){
        throw error
    }
}