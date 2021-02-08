<template>
  <div id="app">
    <div @click="changeRoute('home','/app-vue/home')">home -Vue</div>
    <div @click="changeRoute('about','/app-vue/about')">home -Vue</div>

    <div @click="changeRoute('home','/app-react/home')">home -React</div>
    <div @click="changeRoute('about','/app-react/about')">home -React</div>
    <!--
    **重要**
    提供给子应用的容器
    这里的id用在 registerMicroApps 的 container
    -->
    <div id="sub-view"></div>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods:{
    changeRoute(title,href){
      window.history.pushState({}, title, href);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
