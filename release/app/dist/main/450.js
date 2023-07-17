"use strict";
exports.id = 450;
exports.ids = [450];
exports.modules = {

/***/ 8450:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ registerUser)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

async function registerUser(user) {
    try {
        const query = `INSERT INTO Cuenta (nombre_usuario, contrasena, tipo_cuenta) VALUES ('${user.nombre}', '${user.contraseña}', '${user.tipo_cuenta}')`;
        const result = await (await _coneccion__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).query(query);
        return result;
    }
    catch (error) {
        throw error;
    }
}


/***/ })

};
;
//# sourceMappingURL=450.js.map