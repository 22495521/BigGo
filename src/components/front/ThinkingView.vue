<template>
  <div class="bg-white position-relative">
    <div class="balloon1" data-aos="fade-up" data-aos-offset="200">
      <img
        src="../../assets/image/首頁/Section_01_blue_balloon.svg"
        alt="Balloon"
      />
    </div>
    <div class="balloon2" data-aos="fade-up" data-aos-offset="200">
      <img
        src="../../assets/image/首頁/Section_01_orange_balloon.svg"
        alt="Balloon"
      />
    </div>
    <div class="container pt-4 bg-white">
      <div class="row justify-content-center m-t pt-7 pt-md-4">
        <div class="fs-2 text-center mb-md-1" style="font-weight: 700;">
          線上從0開始打造圍<br class="d-md-none" />棋思維
        </div>
        <div class="col-md-10">
          <ul class="d-flex flex-column flex-md-row justify-content-between">
            <li class="text-center list-unstyled">
              <div>
                <img
                  height="250px"
                  width="250px"
                  class="img-fluid"
                  src="../../assets/image/首頁/Section_02_illustration01.svg"
                  alt=""
                />
                <p class="fs-4 mt-3 fw-bolder">
                  從啟蒙到段位<br class="d-md-block d-none" />循序漸進
                </p>
              </div>
            </li>
            <li class="text-center list-unstyled">
              <div>
                <img
                  height="250px"
                  width="250px"
                  class="img-fluid"
                  src="../../assets/image/首頁/Section_02_illustration02.svg"
                  alt=""
                />
                <p class="fs-4 mt-3 fw-bolder">
                  把枯燥變成有<br class="d-md-block d-none" />趣的教學方式
                </p>
              </div>
            </li>
            <li class="text-center list-unstyled">
              <div>
                <img
                  height="250px"
                  width="250px"
                  class="img-fluid"
                  src="../../assets/image/首頁/Section_02_illustration03.svg"
                  alt=""
                />
                <p class="fs-4 mt-3 fw-bolder">
                  超過一百位學<br class="d-md-block d-none" />員成功晉段
                </p>
              </div>
            </li>
          </ul>
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
      offset: 200, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000,
      easing: "ease", // default easing for AOS animations
      once: true, // whether animation should happen only once - while scrolling down
    });
  },
};
</script>
<style>

.balloon1 {
  position: absolute;
  right: 10%;
  top: -20%;
}
.balloon2 {
  position: absolute;
  right: 30%;
  top: -10%;
}
@media screen and (min-width: 768px) {
  .balloon1 {
    right: 5%;
    top: -30%;
  }
  .balloon2 {
    right: 10%;
    top: -15%;
  }
}
@media screen and (max-width: 425px) {
  .balloon1 {
    display: none;
  }
  .balloon2 {
    display: none;
  }
}
</style>
