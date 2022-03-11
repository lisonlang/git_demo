<template>
  <div class="box">
    <ul class="nav nav-pills nav-stacked">
      <router-link tag="li" role="presentation" active-class="active" to="/Home"
        ><a href="#">Home</a></router-link
      >
      <router-link tag="li" role="presentation" active-class="active" :to="{name:'About'}"
        ><a href="#">about</a></router-link
      >
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>


</style>