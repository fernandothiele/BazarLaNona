import connection from './coneccion';



export default async function consultarInv(){
    try{
        const query = `SELECT * FROM Inventario`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    }catch(error){
        throw error;
    }
}