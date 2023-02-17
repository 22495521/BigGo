<template>
  <div class="banner d-flex justify-content-center align-items-center">
    <p class="banner-text">
      <img
        class="d-none d-md-inline-block slippery-slide"
        height="173px"
        width="138px"
        src="../../assets/image/首頁/Section_01_slide.svg"
        alt="slippery-slide"
      /><span class="mark-pen text-start">樂在棋中，</span><br />
      <span class="mark-pen text-md-center"
        >打造孩子的圍<br class="d-block d-md-none" />棋遊樂場。</span
      >
    </p>
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");

.banner {
  background: url("../../assets/image/首頁/Section_01_web.jpg");
  height: 90vh;
}
.banner-text {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: white;
  line-height: 0%;
}
.mark-pen {
  padding-left: 0.5rem;
  background-image: linear-gradient(transparent 70%, #ff8080 50%);
}

@media screen and (max-width: 768px) {
  .banner {
    background: url("../../assets/image/首頁/Section_01_mobile.jpg");
  }
  .banner-text {
    line-height: 150%;
  }
}

.slippery-slide {
  margin-bottom: 4%;
  margin-right: 2%;
}
</style>
