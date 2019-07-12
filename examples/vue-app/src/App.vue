<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <h2>Renderd Object</h2>
    <pre>{{ JSON.stringify(rendered) }}</pre>
    <HelloWorld msg="Example App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import template from './example.yaml'

export default {
  name: 'app',
  components: {
    HelloWorld
  },
  data: () => ({
    rendered: template({ items: [
      { name: 'foo', value: 1 },
      { name: 'bar', value: 2 },
      { name: 'baz', value: 3 }
    ] })
  })
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
