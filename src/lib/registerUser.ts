import connection from './coneccion';

export default async function registerUser(user: any) {
    try {
        const query = `INSERT INTO users (nombre, contraseña, correo) VALUES ('${user.nombre}', '${user.contraseña}', '${user.correo}')`;
        const result = await (await connection).query(query);
        return result;
      } catch (error) {
        throw error;
      }
}