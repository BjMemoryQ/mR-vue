<template>
 <swiper class='swiper-wrap'
    ref="mySwiper"
    :options="swiperOption"
    v-if="commodity.length!=0">
    <swiper-slide v-for="(item, index) in commodity"
      data-index="index"
      :key="index">
      <img class="item" :src='item.url' />
    </swiper-slide>
    <div class="swiper-pagination"
      slot="pagination"></div>
    <div class="swiper-button-prev"
      slot="button-prev"></div>
    <div class="swiper-button-next"
      slot="button-next"></div>
  </swiper>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style lang='stylus' scoped>
</style>
<template>
  <swiper class='swiper-wrap'
    ref="mySwiper"
    :options="swiperOption"
    v-if="commodity.length!=0">
    <swiper-slide v-for="(item, index) in commodity"
      data-index="index"
      :key="index">
      <img class="item" :src='item.url' />
    </swiper-slide>
    <div class="swiper-pagination"
      slot="pagination"></div>
    <div class="swiper-button-prev"
      slot="button-prev"></div>
    <div class="swiper-button-next"
      slot="button-next"></div>
  </swiper>
</template>
<script>
export default {
  name: 'Home',
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        }
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
<style lang='scss' scoped>
.swiper-wrap {
  width: 500px;
  height: 300px;
}
.item {
  width: 100%;
  height: 100%;
}
</style>
