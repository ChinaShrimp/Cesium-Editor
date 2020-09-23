const { app, BrowserWindow, ipcMain } = require("electron");

var fs = require("fs");
var path = require("path");

const createWindow = () => {
  var mainWindow = new BrowserWindow({
    width: 1100,
    height: 820,
    resizable: false,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
    },
  });

  mainWindow.loadFile("index.html");
};

// Electron会在初始化完成并且准备好创建浏览器窗口时调用这个方法
// 部分 API 在 ready 事件触发后才能使用。
app.whenReady().then(createWindow);

app.on("quit", function () {
  fs.writeFile(
    path.join(__dirname, "code.js"),
    "var viewer = new Cesium.Viewer('cesiumContainer');\n",
    function (err) {}
  );
});

app.on("window-all-closed", function () {
  fs.writeFile(
    path.join(__dirname, "code.js"),
    "var viewer = new Cesium.Viewer('cesiumContainer');\n",
    function (err) {}
  );
  if (process.platform != "darwin") {
    app.quit();
  }
});
