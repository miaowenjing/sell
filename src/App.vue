<template>
  <div id="app">
   
      <router-link to="/home" class="content_title_style">余额说明</router-link>
      <router-link to="/about" class="content_title_style">about</router-link>


      pull123
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
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
