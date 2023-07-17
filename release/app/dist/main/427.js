"use strict";
exports.id = 427;
exports.ids = [427];
exports.modules = {

/***/ 9427:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ añadirFactura)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

// CREATE TABLE Factura (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     fecha DATE NOT NULL,
//     venta INT NOT NULL,
//     razon_social VARCHAR(255) NOT NULL,
//     rut_cliente VARCHAR(20) NOT NULL,
//     giro VARCHAR(255) NOT NULL,
//     direccion VARCHAR(255) NOT NULL,
//     total_neto DECIMAL(10, 2) NOT NULL,
//     iva DECIMAL(10, 2) NOT NULL,
//     total_final DECIMAL(10, 2) NOT NULL,
//     FOREIGN KEY (venta) REFERENCES Venta(codigo)
//   );
async function añadirFactura(factura) {
    try {
        const query = `INSERT INTO Factura (fecha, venta, razon_social, rut_cliente, giro, direccion, total_neto, iva, total_final) 
                            VALUES ('${factura.fecha}', '${factura.venta}', '${factura.razon_social}', '${factura.rut_cliente}', '${factura.giro}', '${factura.direccion}', '${factura.total_neto}', '${factura.iva}', '${factura.total}')`;
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
//# sourceMappingURL=427.js.map