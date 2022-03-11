<template>
  <div class="container">
    <div class="row">
      <div class="col-md-4" v-for="item in userinfo" :key="item.id">
        <div class="imgs"><img :src="item.avatar_url" alt="" /></div>
        <div class="name">{{ item.login}}</div>
      </div>
     
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userinfo: [],
    };
  },

  mounted() {
    this.$bus.$on("userinfo", (infos) => {
      this.userinfo = infos.items;
      console.log(this.userinfo);
    });
  },
   beforeDestroy() {
    this.$bus.$off("userinfo");
    // 最好在beforeDestroy钩子中，用$off去解绑当前组件所用到的事件,一定要写解绑的事件名，否则就全部解绑了
  },
};
</script>

<style scoped lang="less">
.imgs,
.name {
  text-align: center;
}
img{
  width:50%;
}
.container{
  margin-top:30px;
  .col-md-4{
    border: 1px solid gray;
  }
}

</style>