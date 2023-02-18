<template>
  <div
    class="banner d-flex flex-column justify-content-center align-items-center"
  >
    <div>
      <div class="banner-text text-start">
        <img
          src="../../assets/image/首頁/Section_01_slide.svg"
          class="d-none d-md-inline-block"
          alt="slide"
        />
        <span class="mark-pen align-bottom ms-md-3">樂在棋中，</span>
      </div>
      <div>
        <span class="banner-text mark-pen"
          >打造孩子的圍<br class="d-md-none" />棋遊樂場。</span
        >
      </div>
    </div>
  </div>
</template>

<script></script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap");

.banner {
  background: url("../../assets/image/首頁/Section_01_web.jpg");
  height: 90vh;
  background-repeat: no-repeat;
}
.banner-text {
  font-family: "Noto Sans", sans-serif;
  font-weight: 700;
  font-size: 64px;
  color: white;
}
.mark-pen {
  padding-left: 0.5rem;
  background-image: linear-gradient(transparent 70%, #ff8080 50%);
}

@media screen and (max-width: 768px) {
  .banner {
    background: url("../../assets/image/首頁/Section_01_mobile.jpg");
  }
}
</style>
