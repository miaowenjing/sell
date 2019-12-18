<template>
  <div class="shoplist_container">
    
    <!-- <section>
           <h4 class="city_title">热门城市</h4>
            <ul class="citylistul clear">
               <router-link  tag="li" v-for="item in hotcity" :to="'/city/' + item.id" :key="item.id">
                    {{item.name}}
                </router-link>
            </ul>
    </section> -->
 
  </div>
</template>

<script>
import Header from '../../components/header.vue'
import {cityGuess, hotcity, groupcity} from '../../service/getData'
export default {
    data() {
        return {
            hotcity:[]
        }
    },
    mounted() {
        hotcity().then(res=>{
            this.hotcity=res;
        })
    },
   components: {
     Header
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
