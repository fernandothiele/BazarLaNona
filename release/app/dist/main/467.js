"use strict";
exports.id = 467;
exports.ids = [467];
exports.modules = {

/***/ 6467:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ consultarEmpleados)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

async function consultarEmpleados() {
    try {
        const query = `SELECT * FROM Cuenta WHERE tipo_cuenta = 'empleado'`;
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
//# sourceMappingURL=467.js.map