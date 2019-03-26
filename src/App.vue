<template>
  <div id="app">
    <Home></Home>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Footer from './components/footer/footer.vue'
import Msite from './pages/msite/msite.vue'
import Home from './pages/home/home.vue'
import about from './components/About.vue'
import Header from './components/header.vue'

export default {
  name: 'app',
  components: {
    Footer,
    Msite,
    Home,
    about,
    Header
  }
}
</script>

<style>

</style>
