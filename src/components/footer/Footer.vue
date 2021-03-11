<template>
  <footer>
    <router-link v-for="(item, index) in linkArray" :key="index" :to="item.linkTo">
      <div class="icon-img">
        <img :src="item.imgSrc" :alt="item.text" />
      </div>

      <div>{{ item.text }}</div>
    </router-link>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Footer',
  data() {
    return {
      linkArray: [
        {
          imgSrc: require(`@/assets/images/icon/ic_mission1.png`),
          linkTo: '/missionOne',
          text: '任務',
        },
        {
          imgSrc: require(`@/assets/images/icon/ic_mission2.png`),
          linkTo: '/missionTwo',
          text: '任務',
        },
        {
          imgSrc: require(`@/assets/images/icon/ic_fame_purple.png`),
          linkTo: '/vip',
          text: 'VIP',
        },
        {
          imgSrc: require(`@/assets/images/icon/ic_mission1.png`),
          linkTo: '/mcenter',
          text: '我的',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
$font_color: #717171;

footer {
  position: fixed;
  display: inline-flex;
  left: 0;
  bottom: 0;
  height: 64px;
  width: 100%;
  background: #fff;
  font-size: 12px;
}

a {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  color: $font_color;
  text-decoration: none;
  cursor: none;

  &:active {
    color: $font_color;
  }
}

.icon-img {
  width: 22px;
  height: 20px;

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
