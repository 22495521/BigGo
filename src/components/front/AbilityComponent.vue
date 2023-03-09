<template>
  <p class="mb-0 fw-bold fs-2 text-center py-4">圍棋提升的多維能力</p>
  <div class="container px-5 px-md-0 d-flex flex-column overflow-hidden">
    <div class="d-md-flex" data-aos="fade-up" data-offset="200">
      <div class="card-w">
        <img
          src="../../assets/image/首頁/Section_04_img01.jpg"
          class="img-fluid card-radius"
          alt=""
        />
      </div>
      <div
        class="pt-3 d-md-flex flex-md-column justify-content-center card-w"
        style="position: relative"
      >
        <img
          src="../../assets/image/首頁/Section_04_illustration01.svg"
          class="drow-img img-fluid"
          alt=""
        />
        <div class="px-md-4 py-3 py-md-0">
          <img src="../../assets/image/首頁/" alt="" />
          <h4>集中專注力</h4>
          <p class="fs-4 py-2 py-md-0">
            下一盤圍棋大約30分鐘至1小時,須全程集中精神、不可鬆懈。
          </p>
        </div>
      </div>
    </div>
    <div
      class="d-md-flex flex-md-row-reverse"
      data-aos="fade-up"
      data-offset="200"
    >
      <div class="card-w">
        <img
          src="../../assets/image/首頁/Section_04_img02.jpg"
          class="img-fluid card-radius"
          alt=""
        />
      </div>
      <div
        class="pt-3 d-md-flex flex-md-column justify-content-center card-w"
        style="position: relative"
      >
        <img
          src="../../assets/image/首頁/Section_04_illustration02.svg"
          class="img-fluid flower"
          alt=""
        />
        <div class="px-md-4 py-3 py-md-0">
          <h4>獨立思考</h4>
          <p class="fs-4 py-2 py-md-0">
            每一盤棋都有可能面臨困難的境地，需要學會不依賴任何人做出決定。
          </p>
        </div>
      </div>
    </div>
    <div class="d-md-flex" data-aos="fade-up" data-offset="200">
      <div class="card-w">
        <img
          src="../../assets/image/首頁/Section_04_img03.jpg"
          class="img-fluid card-radius"
          alt=""
        />
      </div>
      <div
        class="pt-3 d-md-flex flex-md-column justify-content-center card-w"
        style="position: relative"
      >
        <img
          src="../../assets/image/首頁/Section_04_illustration03.svg"
          class="img-fluid chr"
          alt=""
        />
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

.chr {
  width: 287px;
  height: 202px;
  position: absolute;
  bottom: 41px;
  right: 28px;
}

@media (max-width: 1200px) {
  .chr {
    bottom: 0px;
    width: 150px;
  }
}
@media (max-width: 1000px) {
  .chr {
    bottom: -20px;
  }
}
@media (max-width: 768px) {
  .chr {
    bottom: 70px;
  }
}

.flower {
  width: 190px;
  height: 174px;
  position: absolute;
  right: 77px;
  bottom: 45px;
}

@media (max-width: 1200px) {
  .flower {
    bottom: 0px;
  }
}
@media (max-width: 1000px) {
  .flower {
    width: 100px;
    height: 90px;
    bottom: 30px;
  }
}
@media (max-width: 768px) {
  .flower {
    width: 95px;
    width: 87px;
    bottom: 120px;
  }
}

.drow-img {
  position: absolute;
  width: 339px;
  height: 121px;
  left: 67px;
  top: 68px;
}
@media (max-width: 1200px) {
  .drow-img {
    width: 175px;
    height: 60px;
  }
}

@media (max-width: 1200px) {
  .drow-img {
    top: 40px;
    width: 175px;
    height: 60px;
  }
}
@media (max-width: 768px) {
  .drow-img {
    left: 198px;
    width: 137px;
    height: 49px;
  }
}
</style>
