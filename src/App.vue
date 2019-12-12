<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <h1>Hello App!</h1>
    <p class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/foo">Go to Foo</router-link>
      <router-link to="/bar">Go to Bar</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
import "@/assets/scss/variables.scss";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
  }
};
</script>

<style lang="scss">
body {
  background-color: $bg-body;
  color: $color-body;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  margin-top: 60px;
}
.nav {
  a {
    color: #fff;
    text-transform: uppercase;
    font-size: 14px;
    margin: 0 10px;
  }
}
</style>
