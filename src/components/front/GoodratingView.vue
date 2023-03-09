<template>
  <div class="bg-secondary">
    <p class="fs-2 text-center pt-5 pb-3 bg-secondary" style="font-weight: 700;">好評見證</p>
    <div class="swiper-container pb-4">
      <swiper
        :slidesPerView="1.4"
        :spaceBetween="5"
        :breakpoints="{
          '1024': {
            slidesPerView: 4.3,
            spaceBetween: 20,
          },

          '768': {
            slidesPerView: 4.3,
            spaceBetween: 10,
          },
          '512': {
            slidesPerView: 3,
            spaceBetween: 8,
          },
        }"
        class="mySwiper"
      >
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review01.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review02.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review03.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review04.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review01.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review02.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review03.png"
            alt=""
        /></swiper-slide>
        <swiper-slide class="bg-secondary">
          <img
            class="img-fluid"
            src="../../assets/image/首頁/Section_03_review04.png"
            alt=""
        /></swiper-slide>
      </swiper>
    </div>
  </div>
</template>
<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";

// import required modules

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
};
</script>

<style>
/* body {
  background: #ffe7d9;
} */
.swiper-container {
  background: #ffe7d9;
}
.swiper {
  width: 80%;
  height: 100%;
  padding: 0 0px;
}
@media screen and (max-width: 768px) {
  .swiper {
    width: 80%;
    height: 60%;
  }
}
@media screen and (max-width: 512px) {
  .swiper {
    width: 100%;
  }
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
@media screen and (max-width: 512px) {
  .swiper-slide img {
    width: 90%;
    margin-right: -40px;
  }
}
</style>
