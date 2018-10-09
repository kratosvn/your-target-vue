<template>
    <div id="app" class="container">
        <div class="col-md-12">
            <img width="30%" alt="Vue logo" src="./assets/logo.png">
            <home/>
        </div>
    </div>
</template>

<script>
  import Home from './components/Home.vue'
  import 'bootstrap/dist/css/bootstrap.css'
  import 'bootstrap-vue/dist/bootstrap-vue.css'

  export default {
    name: 'app',
    components: {
      Home
    }
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
