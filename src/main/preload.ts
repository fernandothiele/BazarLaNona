// Disable no-unused-vars, broken for spread args
/* eslint no-unused-vars: off */
import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

export type Channels = 'ipc-example';

export const electronHandler = {
  ipcRenderer: {
    sendMessage(channel: Channels, ...args: unknown[]) {
      ipcRenderer.send(channel, ...args);
    },
    async invoke(channel: Channels, ...args: unknown[]) {
      try {
        return await ipcRenderer.invoke(channel, ...args);
      } catch (error) {
        // Enviar el error al proceso principal para manejarlo adecuadamente
        ipcRenderer.send('error', error);
        throw error;
      }
    },    
    on(channel: Channels, func: (...args: unknown[]) => void) {
      const subscription = (_event: IpcRendererEvent, ...args: unknown[]) =>
        func(...args);
      ipcRenderer.on(channel, subscription);

      return () => {
        ipcRenderer.removeListener(channel, subscription);
      };
    },
    once(channel: Channels, func: (...args: unknown[]) => void) {
      ipcRenderer.once(channel, (_event, ...args) => func(...args));
    },
  },
};

contextBridge.exposeInMainWorld('electron', electronHandler);

contextBridge.exposeInMainWorld('registrar', {
  registerUser(user: any) {
    return ipcRenderer.invoke('registerUser', user);
  }
})

contextBridge.exposeInMainWorld('login', {
  loginUser(user: any) {
    return ipcRenderer.invoke('loginUser', user);
  }
});

contextBridge.exposeInMainWorld('añadir', {
  añadirProducto(producto: any) {
    return ipcRenderer.invoke('añadirProducto', producto);
  }
});

contextBridge.exposeInMainWorld('consultar', {
  consultarInv() {
    return ipcRenderer.invoke('consultarInv');
  }
});

contextBridge.exposeInMainWorld('Venta', {
  añadirVenta(venta: any) {
    return ipcRenderer.invoke('añadirVenta', venta);
  }
});

contextBridge.exposeInMainWorld('Boleta', {
  añadirBoleta(boleta: any) {
    return ipcRenderer.invoke('añadirBoleta', boleta);
  }
});

contextBridge.exposeInMainWorld('factura', {
  añadirFactura(factura: any) {
    return ipcRenderer.invoke('añadirFactura', factura);
  }
});

contextBridge.exposeInMainWorld('detalle',{
  añadirDetalleFactura(detalle: any) {
    return ipcRenderer.invoke('añadirDetalleFactura', detalle);
  }
});

contextBridge.exposeInMainWorld('buscarventa', {
  consultarVentas(busqueda: any) {
    return ipcRenderer.invoke('consultarVentas', busqueda);
  }
});

contextBridge.exposeInMainWorld('empleados', {
  consultarEmpleados(){
    return ipcRenderer.invoke('consultarEmpleados');
  }
});

export type ElectronHandler = typeof electronHandler;