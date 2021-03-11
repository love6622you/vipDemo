<template>
  <Header />

  <div class="body-content">
    <router-view />
  </div>

  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/header/Header.vue';
import Footer from '@/components/footer/Footer.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
    Footer,
  },
});
</script>

<style lang="scss">
.body-content {
  // header: 44px , footer: 64px
  height: calc(100vh - 108px);
  // height: 100%;
}
</style>
