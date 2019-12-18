import Vue from "vue";
import Router from "vue-router";
import App from '../App.vue'
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import city from "../pages/city/city.vue";

Vue.use(Router);
const router = new Router({
  routes: [
    {
      path: '/',
      component: App,
      children:[
        {
          path: "/home",
          component: Home
        },
        {
          path: "/about",
          component: About
        },
      ]
    },
  //   {
  //     path: "/home",
  //     component: Home
  //   },
  //   {
  //     path: "/about",
  //     component: About
  //   },
  //   {
  //     path: "*",
  //     redirect: "/home"
  //   },
  //   {
  //     path: '/city/:cityid',
  //     component: city
  // },
  ]
});
export default router;
