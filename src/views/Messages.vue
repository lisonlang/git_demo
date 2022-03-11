<template>
  <div>
    <ul>
      <li v-for="item in MessageList" :key="item.id">
        <router-link
          :to="{
            name: `detail`,
            query: {
              id: item.id,
              title: item.title,
            },
          }"
        >
          {{ item.title }}
        </router-link>
        <button @click="showPush(item)">push查看</button>
        <button @click="showReplace(item)">replace查看</button>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    showPush(item){
       this.$router.push({
         name:"detail",
         query:{
           id:item.id,
           title:item.title
         }
       })
    }
  },
  data() {
    return {
      MessageList: [
        {
          id: 1,
          title: "消息1",
        },
        {
          id: 2,
          title: "消息2",
        },
        {
          id: 3,
          title: "消息3",
        },
      ],
    };
  },
};
</script>

<style>
</style>