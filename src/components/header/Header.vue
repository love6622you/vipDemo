<template>
  <header>
    {{ title }}
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Header',
  computed: {
    title() {
      let obj = this.$route.name;
      return obj;
    },
  },
});
</script>

<style lang="scss" scoped>
header {
  line-height: 44px;
  text-align: center;

  color: #241332;
  font-size: 16px;
}
</style>
