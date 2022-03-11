<template>
  <div>
    <button @click="back">回退</button>
    <button @click="go">前进</button>
    <button @click="testGo">测试go</button>
    <button @click="save">存到本地中</button>
    <button @click="del">从本地中删除</button>
  </div>
</template>

<script>
export default {
    methods: {
        back(){
          this.$router.back();
        },
        go(){
            this.$router.forward();
        },
        testGo(){
             this.$router.go(1)
        },save(){
           localStorage.setItem("school",'bbk')
        },
        del(){
            localStorage.removeItem("school")
        }
        
    }
};
</script>

<style>
</style>