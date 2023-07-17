(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  electronHandler: () => (/* binding */ electronHandler)
});

;// CONCATENATED MODULE: external "electron"
const external_electron_namespaceObject = require("electron");
;// CONCATENATED MODULE: ./src/main/preload.ts
// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */

const electronHandler = {
    ipcRenderer: {
        sendMessage(channel, ...args) {
            external_electron_namespaceObject.ipcRenderer.send(channel, ...args);
        },
        async invoke(channel, ...args) {
            try {
                return await external_electron_namespaceObject.ipcRenderer.invoke(channel, ...args);
            }
            catch (error) {
                // Enviar el error al proceso principal para manejarlo adecuadamente
                external_electron_namespaceObject.ipcRenderer.send('error', error);
                throw error;
            }
        },
        on(channel, func) {
            const subscription = (_event, ...args) => func(...args);
            external_electron_namespaceObject.ipcRenderer.on(channel, subscription);
            return () => {
                external_electron_namespaceObject.ipcRenderer.removeListener(channel, subscription);
            };
        },
        once(channel, func) {
            external_electron_namespaceObject.ipcRenderer.once(channel, (_event, ...args) => func(...args));
        },
    },
};
external_electron_namespaceObject.contextBridge.exposeInMainWorld('electron', electronHandler);
external_electron_namespaceObject.contextBridge.exposeInMainWorld('registrar', {
    registerUser(user) {
        return external_electron_namespaceObject.ipcRenderer.invoke('registerUser', user);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('login', {
    loginUser(user) {
        return external_electron_namespaceObject.ipcRenderer.invoke('loginUser', user);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('añadir', {
    añadirProducto(producto) {
        return external_electron_namespaceObject.ipcRenderer.invoke('añadirProducto', producto);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('consultar', {
    consultarInv() {
        return external_electron_namespaceObject.ipcRenderer.invoke('consultarInv');
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('Venta', {
    añadirVenta(venta) {
        return external_electron_namespaceObject.ipcRenderer.invoke('añadirVenta', venta);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('Boleta', {
    añadirBoleta(boleta) {
        return external_electron_namespaceObject.ipcRenderer.invoke('añadirBoleta', boleta);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('factura', {
    añadirFactura(factura) {
        return external_electron_namespaceObject.ipcRenderer.invoke('añadirFactura', factura);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('detalle', {
    añadirDetalleFactura(detalle) {
        return external_electron_namespaceObject.ipcRenderer.invoke('añadirDetalleFactura', detalle);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('buscarventa', {
    consultarVentas(busqueda) {
        return external_electron_namespaceObject.ipcRenderer.invoke('consultarVentas', busqueda);
    }
});
external_electron_namespaceObject.contextBridge.exposeInMainWorld('empleados', {
    consultarEmpleados() {
        return external_electron_namespaceObject.ipcRenderer.invoke('consultarEmpleados');
    }
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=preload.js.map