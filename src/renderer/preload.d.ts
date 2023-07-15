import { ElectronHandler } from 'main/preload';

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    electron: ElectronHandler;
    registrar: {
      registerUser(user: any): Promise<any>;
    };
    login: {
      loginUser(user: any): Promise<any>;
    };
    añadir: {
      añadirProducto(producto: any): Promise<any>;
    };
    consultar: {
      consultarInv(): Promise<any>;
    };
    venta:{
      añadirVenta(venta: any): Promise<any>;
    };
    boleta:{
      añadirBoleta(boleta: any): Promise<any>;
    }
  }
}

export {};
