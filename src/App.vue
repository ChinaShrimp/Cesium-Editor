<template>
  <div id="app">
    <div id="cesiumContainer"></div>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted: () => {
    var viewer = new window.Cesium.Viewer("cesiumContainer");

    console.log(viewer);
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
</style>
