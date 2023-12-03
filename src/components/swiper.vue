<template>
  <div class="swipr-container">
    <swiper
      :pagination="true"
      :modules="modules"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :loop="true"
      class="mySwiper"
    >
      <swiper-slide
        v-for="(item, index) in slideList"
        :key="index"
        class="slide1"
      >
        <img :src="item.path" alt="" />
      </swiper-slide>
    </swiper>

    <!-- <div class="we-chat-container">
      <div class="we-chat"></div>
    </div>
    <div class="we-chat-container">
      <img class="img" src="../assets/images/we-chat@2x.png" alt="" srcset="">
    </div> -->

    <!-- <div class="canvas-comtainer">
      <canvas id="my-canvas" width="300" height="300"></canvas>
    </div> -->
  </div>
</template>
<script>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

import { ref, reactive } from "vue";

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    const slideList = reactive([
      { path: new URL("../assets/images/nature-1.jpg", import.meta.url).href },
      { path: new URL("../assets/images/nature-2.jpg", import.meta.url).href },
      { path: new URL("../assets/images/nature-3.jpg", import.meta.url).href },
      { path: new URL("../assets/images/nature-4.jpg", import.meta.url).href },
      // { path: new URL("../assets/images/nature-5.jpg", import.meta.url).href },
      // { path: new URL("../assets/images/nature-6.jpg", import.meta.url).href },
      // { path: new URL("../assets/images/nature-7.jpg", import.meta.url).href },
    ]);
    return {
      slideList,
      modules: [Pagination, Autoplay],
    };
  },
};
</script>

<style lang="scss" scoped>
.swipr-container {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  height: 400px;
  .slide1 {
    background-color: aqua;
  }
  .slide2 {
    background-color: skyblue;
  }
  .slide3 {
    background-color: papayawhip;
  }
  .slide4 {
    background-color: pink;
  }

  :deep(.swiper-pagination) {
    display: flex;
    justify-content: center;
    gap: 10px;

    .swiper-pagination-bullet {
      width: 8px;
      height: 8px;
      background: #d8d8d800;
      border: 1px solid #fff9;
      border-radius: 50%;
      margin: 0;
    }
    .swiper-pagination-bullet-active {
      background-color: #fff;
    }
  }
  .we-chat-container {
    width: 80px;
    height: 80px;
    padding: 10px;
    background: #fff;
    .we-chat {
      width: 100%;
      height: 100%;
      background-image: url("../assets/images/we-chat@2x.png");
      background-position: center;
      background-size: 100%;
      background-repeat: no-repeat;
    }
    .img{
      width: 80px;
      height: 80px;
    }
  }
}
</style>
