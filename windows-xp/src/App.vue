<template>
  <Wallpaper />
  <Directory />
  <Layer />
  <Taskbar />
</template>

<script>
import Wallpaper from "./components/Wallpaper.vue";
import Directory from "./components/Directory.vue";
import Layer from "./components/Layer.vue";
import Taskbar from "./components/Taskbar.vue";
export default {
  components: { Wallpaper, Directory, Layer, Taskbar },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  color: $primary-color;
  box-sizing: border-box;
  line-height: 1em;
}

#root {
  position: relative;
  display: flex;
  flex-flow: column wrap;
  overflow: hidden;
  height: 100vh;
  width: 100vw;
}
</style>
