"use strict";
exports.id = 523;
exports.ids = [523];
exports.modules = {

/***/ 2523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ añadirDetalleFactura)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

// CREATE TABLE DetalleFactura (
//     id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     factura INT NOT NULL,
//     codigo_producto INT NOT NULL,
//     cantidad INT NOT NULL,
//     precio_unitario DECIMAL(10, 2) NOT NULL,
//     FOREIGN KEY (factura) REFERENCES Factura(codigo),
//     FOREIGN KEY (codigo_producto) REFERENCES Inventario(codigo_producto)
// );
async function añadirDetalleFactura(detalleFactura) {
    try {
        const query = `INSERT INTO DetalleFactura (factura, codigo_producto, cantidad, precio_unitario) 
                            VALUES ('${detalleFactura.factura}', '${detalleFactura.codigo_producto}', '${detalleFactura.cantidad}', '${detalleFactura.precio_unitario}')`;
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
//# sourceMappingURL=523.js.map