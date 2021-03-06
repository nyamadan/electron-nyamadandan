import { app, BrowserWindow, Menu, MenuItemConstructorOptions } from "electron";
import { readFileSync } from "fs";
import * as path from "path";
import * as url from "url";

let mainWindow: BrowserWindow;

function createWindow() {
  if (process.env.NODE_ENV !== "production") {

    try {
      const devToolExtensionFileText = readFileSync("devtools.json", { encoding: "utf8" });

      if (devToolExtensionFileText != null) {
        const devToolExtensionList = JSON.parse(devToolExtensionFileText) as string[];
        devToolExtensionList.forEach((extension) => {
          BrowserWindow.addDevToolsExtension(extension);
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  // Create the browser window.
  mainWindow = new BrowserWindow({
    height: 600,
    width: 800,
  });

  const appUrl = process.env.NODE_ENV !== "production" ?
    url.format({
      hostname: "localhost",
      pathname: "/index.html",
      port: 8080,
      protocol: "http:",
    }) :
    url.format({
      pathname: path.join(__dirname, "index.html"),
      protocol: "file:",
      slashes: true,
    });

  mainWindow.loadURL(appUrl);

  // Open the DevTools.
  if (process.env.NODE_ENV !== "production") {
    mainWindow.webContents.openDevTools();
  }

  // Emitted when the window is closed.
  mainWindow.on("closed", () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null;
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", () => {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow();
  }
});
