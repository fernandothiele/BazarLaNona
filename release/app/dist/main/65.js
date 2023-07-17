"use strict";
exports.id = 65;
exports.ids = [65];
exports.modules = {

/***/ 3065:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ añadirProducto)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

// CREATE TABLE Inventario ( // tabla inventraio(Procuctos)
//     codigo_producto INT PRIMARY KEY NOT NULL,
//     nombre_producto VARCHAR(255) NOT NULL,
//     informacion VARCHAR(255) NOT NULL,
//     precio_unitario DECIMAL(10, 2) NOT NULL,
//     cantidad INT NOT NULL
//   );
async function añadirProducto(producto) {
    try {
        const query = `INSERT INTO Inventario (codigo_producto, nombre_producto, informacion, precio_unitario, cantidad) 
                        VALUES ('${producto.codigo_producto}', '${producto.nombre_producto}', '${producto.informacion}', '${producto.precio_unitario}', '${producto.cantidad}')`;
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
//# sourceMappingURL=65.js.map