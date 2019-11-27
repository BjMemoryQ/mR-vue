<template>
  <swiper class='swiImgs'
    ref="mySwiper"
    :options="swiperOption"
    v-if="commodity.length!=0">
    <swiper-slide v-for="(item, index) in commodity"
      data-index="index"
      :key="index"
      class="item">
      <img :src='item.url' />
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      swiperOption: {
        // 参数选项,显示小点
        pagination: '.swiper-pagination',
        // 循环
        loop: true,
        // 每张播放时长3秒，自动播放
        autoplay: 2000,
        // 滑动速度
        speed: 1000
        // delay:1000
      },
      commodity: [{
        url: require('../../assets/img/1.jpg')
      }, {
        url: require('../../assets/img/2.jpg')
      }, {
        url: require('../../assets/img/3.jpg')
      }]
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang='stylus' scoped></style>
