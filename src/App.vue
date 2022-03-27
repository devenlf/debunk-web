<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <router-view v-slot="{ Component }">
  <transition>
    <keep-alive>
      <component :is="Component" />
    </keep-alive>
  </transition>
</router-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import hello from './components/hello.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld,
  //   hello
  // }
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
