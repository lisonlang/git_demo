<template>
  <div>
    <p :style="obj">欢迎</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      obj: {
        opacity: 1,
      },
    };
  },
  mounted() {
    let i = 0.01;
    setInterval(() => {
      if (this.obj.opacity >= 1) {
        i = -0.01;
      } else if (this.obj.opacity <= 0) {
        i = 0.01;
      }
      this.obj.opacity += i;
    }, 10);
  },
};
</script>

<style>
</style>