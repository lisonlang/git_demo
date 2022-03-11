<template>
  <div class="hello">
    <button @click="show"> 测试</button>
  <div :class="bac" >
       测试
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      flag:true,
      bac:'a',
      index:0
    }
  },
  methods: {
    show(){
      let arr=['a','b','c'];
      this.index++
     
      if(this.index===3){
        this.index=0
      }
      this.bac=arr[this.index];
    }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

.a{

  width: 50%;
                 background-color: green;
    height: 70px;
}
.b{
  width: 50%;
                
    height: 70px;
  background-color: aqua;
}
.c{width: 50%;
              height: 70px;   
  background-color: blue;
}
</style>
