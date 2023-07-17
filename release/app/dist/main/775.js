"use strict";
exports.id = 775;
exports.ids = [775];
exports.modules = {

/***/ 8775:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ consultarVentas)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

async function consultarVentas(busqueda) {
    console.log("///////////////////////////////////////////////////////////////");
    console.log(busqueda);
    console.log("///////////////////////////////////////////////////////////////");
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
        const result = await (await _coneccion__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).query(query);
        console.log(result);
        return result;
    }
    catch (error) {
        throw error;
    }
}


/***/ })

};
;
//# sourceMappingURL=775.js.map