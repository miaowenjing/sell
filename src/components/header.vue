<template>
  <div class="head_top">
      <div class='left'>ele.me</div>
      <div class='right'>登录|注册</div>
  </div>
</template>

<script>
export default {

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  @import '../style/mixin.scss';
 .head_top{
        background-color: $blue;
        position: fixed;
        z-index: 100;
        left: 0;
        top: 0;
        @include wh(100%,3rem)
        line-height:3rem;
 }
 .left{
     float:left
 }
 .right{
     float:right;
 }
</style>
