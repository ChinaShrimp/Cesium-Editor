const viewer = new Cesium.Viewer("cesiumContainer");

var imageryLayer = new Cesium.ImageryLayer(
  new Cesium.BingMapsImageryProvider({
    key: URL_CONFIG.BING_MAP_KEY, //可至官网（https://www.bingmapsportal.com/）申请key
    url: URL_CONFIG.BINGMAP,
  }),
  {
    maximumTerrainLevel: 16,
  }
);

viewer.imageryLayers.add(imageryLayer);

const promise = viewer.scene.addS3MTilesLayerByScp(
  "http://bimserver.prod.rd.csc994.com:8090/iserver/services/3D-STEEL-TEST/rest/realspace/datas/%E9%92%A2%E7%AD%8B%E6%B5%8B%E8%AF%95/config",
  {
    name: "钢筋",
  }
);

Cesium.when(
  promise,
  function (layer) {
    console.log(layer);
    viewer.flyTo(layer);
  },
  function (e) {
    showError("渲染时发生错误，已停止渲染。", e);
  }
);
