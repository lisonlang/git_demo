<template>
  <div class="container">
    <!-- <search></search> -->
    <!-- <list></list> -->
 <!-- <show></show> -->
  <banner></banner>
  
 <div class="row">
    <div class="col-md-3">
      <buttons></buttons>
    </div>
    <div  class="col-md-9">
    <router-view></router-view>
    </div>
 </div>
 
  </div>
</template>
<script>
import HelloWorld from "./components/HelloWorld.vue";
import list from "./components/list.vue";
import search from "./components/search.vue";
import show from "./components/show.vue"
import buttons from "./components/buttons.vue"
import banner from "./components/banner.vue"
export default {
  data() {
    return {};
  },
  components: {
    list,
    search,
    HelloWorld,
    show,
    buttons,
    banner
  },
};
</script>
<style lang="less">
// #app {
//   padding: 20px;
// }
// .show {
//   width: 50px;
//   height: 60px;
//   background-color: red;
// }
// .item {
//   text-align: center;
// }
</style>
