<template>
    <WebViewer
    />
 
<h1>ici</h1>
</template>
<script>
import WebViewer from "./WebViewer.vue";

export default {
  name: "Test",
  components: {
    WebViewer,
  },
};
</script>
<style>
html,
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
