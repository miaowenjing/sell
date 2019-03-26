<template>
  <div class="shoplist_container">
    <ul>
      <router-link to="/foo">
        to foo
        <section>
          <img src="../images/activity.png" alt>
        </section>
        <hgroup class="shop_right">
          <header class="shop_detail_header">
            <h4 class="shop_title">您好</h4>
            <ul class="shp_detail_ul">
              <li class="supports">保</li>
              <li class="supports">准</li>
              <li class="supports">票</li>
            </ul>
          </header>
          <div class="rating_order_num">
            <section>
             <el-rate
               v-model="value5"
               disabled
               show-score
               text-color="#ff9900"
               score-template="{value}">
            </el-rate>
            <div class='order_section'>
            月售8单
            </div>
            </section>
            <section class="rating_order_num_right">
							<span class="delivery_style delivery_left" >蜂鸟转送</span>
							<span class="delivery_style delivery_right" >准时达</span>
						</section>
          </div>
          	<h5 class="fee_distance">
						<p class="fee">
						￥20起送
							<span class="segmentation">/</span>
							配送费
						</p>
						<p class="distance_time">
						123
						</p>
					</h5>
        </hgroup>
      </router-link>
    </ul>
  </div>
</template>

<script>
// import { shopList } from "src/service/getData";
// import { imgBaseUrl } from "src/config/env";

export default {
  data () {
       return {
        value5: 3.7
      }
  },
  methods: {
    initData() {
      // let res = shopList(32.03965, 118.78664, 0);
      console.log(res);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


