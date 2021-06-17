<template>
  <div id="app">
    <profile />
  </div>
</template>
<script>
import Profile from "./components/Profile.vue";
export default {
  name: "App",
  components: { Profile },
};
</script>

<style>
/* * {
  margin: 0;
  padding: 0;
} */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  min-height: 100vh;
  background-color: #f3f5fa;
}
</style>
