/* eslint global-require: off, no-console: off, promise/always-return: off */

/**
 * This module executes inside of electron's main process. You can start
 * electron renderer process from here and communicate with the other processes
 * through IPC.
 *
 * When running `npm run build` or `npm run build:main`, this file is compiled to
 * `./src/main.js` using webpack. This gives us some performance wins.
 */
import path from 'path';
import { app, BrowserWindow, shell, ipcMain } from 'electron';
import { autoUpdater } from 'electron-updater';
import log from 'electron-log';
import MenuBuilder from './menu';
import { resolveHtmlPath } from './util';
import connection from '../lib/coneccion';

class AppUpdater {
  constructor() {
    log.transports.file.level = 'info';
    autoUpdater.logger = log;
    autoUpdater.checkForUpdatesAndNotify();
  }
}

let mainWindow: BrowserWindow | null = null;

ipcMain.on('ipc-example', async (event, arg) => {
  const msgTemplate = (pingPong: string) => `IPC test: ${pingPong}`;
  console.log(msgTemplate(arg));
  event.reply('ipc-example', msgTemplate('pong'));
});

ipcMain.on('error', (event, error) => {
  console.error('Error en el proceso de renderizado:', error);
  // Aquí puedes realizar acciones adicionales según tus necesidades, como mostrar un diálogo de error al usuario.
});

if (process.env.NODE_ENV === 'production') {
  const sourceMapSupport = require('source-map-support');
  sourceMapSupport.install();
}

const isDebug =
  process.env.NODE_ENV === 'development' || process.env.DEBUG_PROD === 'true';

if (isDebug) {
  require('electron-debug')();
}

const installExtensions = async () => {
  const installer = require('electron-devtools-installer');
  const forceDownload = !!process.env.UPGRADE_EXTENSIONS;
  const extensions = ['REACT_DEVELOPER_TOOLS'];

  return installer
    .default(
      extensions.map((name) => installer[name]),
      forceDownload
    )
    .catch(console.log);
};

const createWindow = async () => {
  if (isDebug) {
    await installExtensions();
  }

  const RESOURCES_PATH = app.isPackaged
    ? path.join(process.resourcesPath, 'assets')
    : path.join(__dirname, '../../assets');

  const getAssetPath = (...paths: string[]): string => {
    return path.join(RESOURCES_PATH, ...paths);
  };

  mainWindow = new BrowserWindow({
    show: false,
    width: 1024,
    height: 728,
    icon: getAssetPath('icon.png'),
    webPreferences: {
      preload: app.isPackaged
        ? path.join(__dirname, 'preload.js')
        : path.join(__dirname, '../../.erb/dll/preload.js'),
    },
  });

  mainWindow.loadURL(resolveHtmlPath('index.html'));

  mainWindow.on('ready-to-show', () => {
    if (!mainWindow) {
      throw new Error('"mainWindow" is not defined');
    }
    if (process.env.START_MINIMIZED) {
      mainWindow.minimize();
    } else {
      mainWindow.show();
    }
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });

  const menuBuilder = new MenuBuilder(mainWindow);
  menuBuilder.buildMenu();

  // Open urls in the user's browser
  mainWindow.webContents.setWindowOpenHandler((edata) => {
    shell.openExternal(edata.url);
    return { action: 'deny' };
  });

  // Remove this if your app does not use auto updates
  // eslint-disable-next-line
  new AppUpdater();
};

/**
 * Add event listeners...
 */

app.on('window-all-closed', () => {
  // Respect the OSX convention of having the application in memory even
  // after all windows have been closed
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app
  .whenReady()
  .then(() => {
    ipcMain.handle('registerUser', async (event, user) => {
      try {
        await (await connection).connect();
        const registerUser = await import('../lib/registerUser'); // import function from lib folder dynamically at runtime (when the ipcMain.handle is called)
        const result = await registerUser.default(user);
        return result;
      } catch (error) {
        throw error;
      }
    });

    ipcMain.handle('loginUser', async (event, user) => {
      try {
        await (await connection).connect();
        const loginUser = await import('../lib/loginUser'); // import function from lib folder dynamically at runtime (when the ipcMain.handle is called)
        const result = await loginUser.default(user);
        return result;
      } catch (error) {
        throw error;
      } 
    });

    ipcMain.handle('añadirProducto', async (event, producto) => {
      try {
        await (await connection).connect();
        const añadirProducto = await import('../lib/añadirProducto'); // import function from lib folder dynamically at runtime (when the ipcMain.handle is called)
        const result = await añadirProducto.default(producto);
        return result;
      } catch (error) {
        throw error;
      }
    });

    ipcMain.handle('consultarInv', async (event) => {
      try {
        await (await connection).connect();
        const consultarInv = await import('../lib/consultarInv'); // import function from lib folder dynamically at runtime (when the ipcMain.handle is called)
        const result = await consultarInv.default();
        return result;
      } catch (error) {
        throw error;
      }
    });

    ipcMain.handle('añadirVenta', async (event, venta) => {
      try {
        await (await connection).connect();
        const añadirVenta = await import('../lib/añadirVenta'); // import function from lib folder dynamically at runtime (when the ipcMain.handle is called)
        const result = await añadirVenta.default(venta);
        return result;
      } catch (error) {
        throw error;
      }
    });

    ipcMain.handle('añadirBoleta', async (event, boleta) => {
      try {
        await (await connection).connect();
        const añadirBoleta = await import('../lib/añadirBoleta'); // import function from lib folder dynamically at runtime (when the ipcMain.handle is called)
        const result = await añadirBoleta.default(boleta);
        return result;
      } catch (error) {
        throw error;
      }
    });





    createWindow();
    app.on('activate', () => {
      // On macOS it's common to re-create a window in the app when the
      // dock icon is clicked and there are no other windows open.
      if (mainWindow === null) createWindow();
    });
  })
  .catch(console.log);
