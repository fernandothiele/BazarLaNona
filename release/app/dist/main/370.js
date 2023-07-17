"use strict";
exports.id = 370;
exports.ids = [370];
exports.modules = {

/***/ 370:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loginUser)
/* harmony export */ });
/* harmony import */ var _coneccion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9385);

async function loginUser(user) {
    try {
        const query = `SELECT * FROM Cuenta WHERE nombre_usuario = '${user.nombre}' AND contrasena = '${user.contraseña}'`;
        const result = await (await _coneccion__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z).query(query);
        if (result[0] && Object.keys(result[0]).length > 0) {
            // Credenciales válidas
            return result[0];
        }
        else {
            // Credenciales inválidas
            throw new Error('Credenciales inválidas');
        }
    }
    catch (error) {
        throw error;
    }
}


/***/ })

};
;
//# sourceMappingURL=370.js.map