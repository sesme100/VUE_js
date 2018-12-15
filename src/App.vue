<template>
  <div id="app">
    <!--프로젝트가 다루는 컴포넌트가 표시되는 Root 컴포넌트-->
    <app-header/> <!--header 네비게이션: ㅇㅕ기에 네스팅  -->
    <router-view/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    "app-header": Header
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body {
  margin: 0px;
  background-color: lightgrey;
}
</style>
