<template>
  <p class="mb-0 fw-bold fs-2 text-center py-4">圍棋提升的多維能力</p>
  <div class="container px-5 px-md-0 d-flex flex-column overflow-hidden">
    <div class="d-md-flex" data-aos="fade-left">
      <div class="card-w">
        <img
          src="../../assets/image/首頁/Section_04_img01.jpg"
          class="img-fluid card-radius"
          alt=""
        />
      </div>
      <div class="pt-3 d-md-flex flex-md-column justify-content-center card-w">
        <div class="px-md-4 py-3 py-md-0">
          <h4>集中專注力</h4>
          <p class="fs-4 py-2 py-md-0">
            下一盤圍棋大約30分鐘至1小時,須全程集中精神、不可鬆懈。
          </p>
        </div>
      </div>
    </div>
    <div class="d-md-flex flex-md-row-reverse" data-aos="fade-right">
      <div class="card-w">
        <img
          src="../../assets/image/首頁/Section_04_img02.jpg"
          class="img-fluid card-radius"
          alt=""
        />
      </div>
      <div class="pt-3 d-md-flex flex-md-column justify-content-center card-w">
        <div class="px-md-4 py-3 py-md-0">
          <h4>獨立思考</h4>
          <p class="fs-4 py-2 py-md-0">
            下一盤圍棋大約30分鐘至1小時，須全程集中精神、不可鬆懈。
          </p>
        </div>
      </div>
    </div>
    <div class="d-md-flex" data-aos="fade-left">
      <div class="card-w">
        <img
          src="../../assets/image/首頁/Section_04_img03.jpg"
          class="img-fluid card-radius"
          alt=""
        />
      </div>
      <div class="pt-3 d-md-flex flex-md-column justify-content-center card-w">
        <div class="px-md-4 py-3 py-md-0">
          <h4>抗壓能力</h4>
          <p class="fs-4 py-2 py-md-0">
            人都會有勝負心，圍棋可以訓練如何勇敢面對失敗時的挫折感。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AOS from "aos";
import "aos/dist/aos.css";

export default {
  mounted() {
    AOS.init({
      offset: 300,
      delay: 0,
      duration: 1500,
      easing: "ease",
    });
  },
};
</script>

<style>
.card-w {
  width: 100%;
}
@media screen and (max-width: 768px) {
  .card-w {
    width: 100%;
  }
  .card-radius {
    border-radius: 32px;
  }
}
</style>
