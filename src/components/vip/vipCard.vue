<template>
  <div class="card-wrap">
    <div class="bg" :style="{ backgroundImage: 'url(' + info.imgSrc.bg + ')' }" />
    <div class="logo" :style="{ backgroundImage: 'url(' + info.imgSrc.logo + ')' }" />

    <div class="context">
      <div class="block">
        <div class="title">{{ info.title }}</div>
        <div class="text">{{ info.text }}</div>
      </div>

      <div class="block">
        <div class="price">{{ info.price }}</div>
        <div v-if="info.isClicked" class="add-button">
          <span>立即加入</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'vipCard',
  props: {
    info: {
      type: Object,
      default: {},
    },
  },
});
</script>

<style lang="scss" scoped>
.card-wrap {
  position: relative;
  height: 148px;
  border-radius: 0px 0px 0px 80px;
  color: #fff;
  background: #241332;
  padding: 0 31px 35px 56px;
}

.bg {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: transparent;
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 0.2;
}

.logo {
  position: absolute;
  left: 23px;
  bottom: 32px;
  width: 80px;
  height: 80px;
  background-size: cover;
  background-repeat: no-repeat;
}

.context {
  height: 100%;
  display: flex;
}

.block {
  width: 100%;
  align-self: flex-end;
  opacity: 0.6;

  &:first-of-type {
    flex: 10;
  }

  &:last-of-type {
    flex: 5;
  }

  .title {
    font-size: 26px;
    height: 35px;
  }

  .price {
    font-size: 20px;
    padding-bottom: 10px;
  }

  .text {
    width: 80%;
    line-height: 19px;
    opacity: 0.72;
  }

  .add-button {
    width: 100px;
    padding: 7.5px 0;
    background: #ffffff;
    border-radius: 40px;
    text-align: center;

    span {
      font-size: 16px;
      color: #8a56ac;
    }
  }
}
</style>
