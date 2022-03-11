<template>
  <div>
    <h2>搜索git用户</h2>

    <input type="text" placeholder="请输入用户名" v-model="keyWord" />

    <button @click="searchWay">搜索</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      keyWord: "",
    };
  },
  methods: {
    searchWay() {
      axios
        .get(`https://api.github.com/search/users?q=${this.keyWord}`)
        .then((response) => {
          console.log(response.data);
          this.$bus.$emit("userinfo", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
      this.keyWord = "";
    },
  },
};
</script>

<style lang="less" scoped>
div {
  background-color: gray;
  
  padding: 20px 0 40px 50px;
  // h2{
  //     // margin-top: 0px;
  // }
  button {
    margin-left: 5px;
  }
}
</style>