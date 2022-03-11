<template>
  <div class="home">
    <h1>home的组件内容</h1>
    <ul class="nav nav-pills">
      <router-link
        active-class="active"
        tag="li"
        role="presentation"
        :to="{ name: `News` }"
        ><a href="#">News</a></router-link
      >

      <router-link
        active-class="active"
        tag="li"
        role="presentation"
        :to="{ name: `Messages` }"
        ><a href="#">Messages</a></router-link
      >
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
