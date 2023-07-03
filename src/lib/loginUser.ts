import connection from './coneccion';

export default async function loginUser(user: any) {
  try {
    const query = `SELECT * FROM users WHERE nombre = '${user.nombre}' AND contraseña = '${user.contraseña}'`;
    const result = await (await connection).query(query);
    
    if (result[0] && Object.keys(result[0]).length > 0){
        // Credenciales válidas
        return console.log(result[0]);
      } else {
        // Credenciales inválidas
        throw new Error('Credenciales inválidas');
      }
  } catch (error) {
    throw error;
  }
}
