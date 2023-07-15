import connection from './coneccion';
// CREATE TABLE Boleta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     fecha DATE NOT NULL,
//     venta INT NOT NULL,
//     total_pagar DECIMAL(10, 2) NOT NULL,
    
//     FOREIGN KEY (venta) REFERENCES Venta(codigo)
//   );

export default async function añadirBoleta(boleta: any){
    try{
        const query = `INSERT INTO Boleta (fecha, venta, total_pagar) VALUES ('${boleta.fecha}', '${boleta.idVenta}', '${boleta.total_final}')`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    }catch(error){
        throw error
    }
}