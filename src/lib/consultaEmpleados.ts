import connection from "./coneccion";

export default async function consultarEmpleados(){
    try {
        const query = `SELECT * FROM Cuenta WHERE tipo_cuenta = 'empleado'`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}