import connection from './coneccion';

export default async function registerUser(user: any) {
    try {
      const query = `INSERT INTO Cuenta (nombre_usuario, contrasena, tipo_cuenta) VALUES ('${user.nombre}', '${user.contraseña}', '${user.tipo_cuenta}')`;
      const result = await (await connection).query(query);
        return result;
      } catch (error) {
        throw error;
      }
}