"use strict";
exports.id = 806;
exports.ids = [806];
exports.modules = {

/***/ 7325:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ añadirBoleta)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

// CREATE TABLE Boleta (
//     codigo INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
//     fecha DATE NOT NULL,
//     venta INT NOT NULL,
//     total_pagar DECIMAL(10, 2) NOT NULL,
//     FOREIGN KEY (venta) REFERENCES Venta(codigo)
//   );
async function añadirBoleta(boleta) {
    try {
        const query = `INSERT INTO Boleta (fecha, venta, total_pagar) VALUES ('${boleta.fecha}', '${boleta.idVenta}', '${boleta.total_final}')`;
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
//# sourceMappingURL=806.js.map