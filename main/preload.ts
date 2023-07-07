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

export type ElectronHandler = typeof electronHandler;