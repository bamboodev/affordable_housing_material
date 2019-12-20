<template>
  <div id="app">
    <div id="vue-material-kit-pro" :class="{ 'nav-open': NavbarStore.showNavbar }">
      <MainNavbar />
      <!-- <h1 class="mt-0">Well Hello There!</h1>
      <p class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/foo">Go to Foo</router-link>
        <router-link to="/bar">Go to Bar</router-link>
      </p>-->
      <router-view></router-view>
      <MainFooter type="white" size="big" />
    </div>
  </div>
</template>

<script>
import "@/assets/scss/variables.scss";
import MainNavbar from "@/layout/MainNavbar.vue";
import MainFooter from "@/layout/MainFooter.vue";
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    MainNavbar,
    MainFooter
  }
};
</script>

<style lang="scss">
body {
  background-color: $bg-body;
  color: $color-body;
  margin: 0px;
  padding: 0px;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  // color: #2c3e50;
  // padding-top: 30px;
}
h1.mt-0 {
  margin-top: 0px;
  padding-top: 0px;
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
