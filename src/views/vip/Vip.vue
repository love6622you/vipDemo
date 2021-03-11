<template>
  <div class="content-wrap">
    <vipCard v-for="item in vipList" :key="item.level" :info="item" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vipCard from '@/components/vip/vipCard.vue';

export default defineComponent({
  name: 'VIP',
  components: {
    vipCard,
  },
  data() {
    return {
      vipList: [
        {
          title: '普通会员',
          price: '￥10.00',
          text: '每日可领取3次任务',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-04.png`),
            logo: require(`@/assets/images/vip/cardVip_silver.png`),
          },
          isClicked: false,
          level: 1,
        },
        {
          title: '白銀会员',
          price: '￥330.00',
          text: '每日可领取10次任务 [1.20元/条]',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-06.png`),
            logo: require(`@/assets/images/vip/cardVip_silver.png`),
          },
          isClicked: true,
          level: 2,
        },
        {
          title: '黄金会员',
          price: '￥660.00',
          text: '每日可领取19次任务',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-02.png`),
            logo: require(`@/assets/images/vip/cardVip_gold.png`),
          },
          isClicked: false,
          level: 3,
        },
        {
          title: '铂金会员',
          price: '￥990.00',
          text: '每日可领取28次任务',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-03.png`),
            logo: require(`@/assets/images/vip/cardVip_platinum.png`),
          },
          isClicked: false,
          level: 4,
        },
        {
          title: '钻石会员',
          price: '￥2990.00',
          text: '每日可领取99次任务',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-01.png`),
            logo: require(`@/assets/images/vip/cardVip_diamond.png`),
          },
          isClicked: false,
          level: 5,
        },
        {
          title: '荣耀会员',
          price: '￥5940.00',
          text: '每日可领取228次任务',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-05.png`),
            logo: require(`@/assets/images/vip/cardVip_glory.png`),
          },
          isClicked: false,
          level: 6,
        },
        {
          title: '尊耀会员',
          price: '￥9899.00',
          text: '每日可领取338次任务',
          imgSrc: {
            bg: require(`@/assets/images/vip/memVip_bg-07.png`),
            logo: require(`@/assets/images/vip/cardVip_zunyao.png`),
          },
          isClicked: false,
          level: 7,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.content-wrap {
  // height: 100%;
  background: #352641;
  padding-bottom: 180px;
}
</style>
