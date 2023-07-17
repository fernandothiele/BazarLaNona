"use strict";
exports.id = 476;
exports.ids = [476];
exports.modules = {

/***/ 6476:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ añadirVenta)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

// CREATE TABLE Venta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     nombre_empleado varchar(255) NOT NULL,
//     fecha DATE NOT NULL,
//     tipo_documento VARCHAR(20) NOT NULL,
//     FOREIGN KEY (nombre_empleado) REFERENCES Cuenta(nombre_usuario)
//   );
async function añadirVenta(venta) {
    try {
        const query = `INSERT INTO Venta (nombre_empleado, fecha, tipo_documento) VALUES ('${venta.nombre_empleado}', '${venta.fecha}', '${venta.tipo_documento}')`;
        const result = await (await _coneccion__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).query(query);
        console.log("--------------------------------");
        console.log("Venta añadida");
        console.log(result);
        console.log("--------------------------------");
        return result;
    }
    catch (error) {
        throw error;
    }
}


/***/ })

};
;
//# sourceMappingURL=476.js.map