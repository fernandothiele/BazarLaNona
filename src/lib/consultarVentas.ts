import connection from "./coneccion";


export default async function consultarVentas(busqueda:any){
    console.log("///////////////////////////////////////////////////////////////")
    console.log(busqueda);
    console.log("///////////////////////////////////////////////////////////////")
    try {
        const query = `SELECT V.codigo AS codigo_venta, V.nombre_empleado, 
        COALESCE(F.fecha, B.fecha, V.fecha) AS fecha, 
        V.tipo_documento,
        F.codigo AS codigo_factura, F.venta, F.razon_social, F.rut_cliente, F.giro, F.direccion, F.total_neto, F.iva, F.total_final,
        B.codigo AS codigo_boleta, B.total_pagar
        FROM Venta V
        LEFT JOIN Factura F ON V.codigo = F.venta
        LEFT JOIN Boleta B ON V.codigo = B.venta
        WHERE V.codigo = '${busqueda.idVenta}';`;
        const result = await (await connection).query(query);
        console.log(result);
        return result;
    } catch (error) {
        throw error;
    }
}