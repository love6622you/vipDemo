<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <div class="image"></div>
    <div class="image image1"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  setup() {},
});
</script>

<style lang="scss" scoped>
// .image {
//   width: 400px;
//   height: 400px;
//   background-position: center center;
//   background-repeat: no-repeat;
//   background-size: contain;
//   background-image: url("~@/assets/images/google/google.png");
// }

// .image1 {
//     background-image: url("~@/assets/images/test/test.png");
// }
</style>
