<template>
  <div class="container d-flex flex-column align-items-center pb-0">
    <div class="pt-5 pb-4">
      <h2 style="font-weight: 700">問與答</h2>
    </div>
    <div class="accordion pb-5 accordion-w" id="accordionExample">
      <div class="mb-4 shadow-sm rounded-3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button
              class="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span class="fs-5 fw-bolder">如何開始上課呢?</span>
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            aria-labelledby="headingOne"
          >
            <div class="accordion-body">
              <span class="fs-5 fw-normal"
                >購買課程後，課程連結傳到您的信箱內，點擊網址就可以開始上課囉!</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 shadow-sm rounded-3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span class="fs-5 fw-bolder"
                >購買的課程有觀看次數或有效期限嗎?</span
              >
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="headingTwo"
          >
            <div class="accordion-body">
              <span class="fs-5 fw-normal">課程皆是無限次觀看，無期限。</span>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 shadow-sm rounded-3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              <span class="fs-5 fw-bolder">我的孩子適合哪一門課程呢?</span>
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="headingThree"
          >
            <div class="accordion-body">
              <span class="fs-5 fw-normal"
                >課程詳情皆有附上適用程度和課程大綱，若不清楚可連絡專人為您服務。</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 shadow-sm rounded-3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFour">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
              aria-expanded="false"
              aria-controls="collapseFour"
            >
              <span class="fs-5 fw-bolder">購買課程後可以退費嗎?</span>
            </button>
          </h2>
          <div
            id="collapseFour"
            class="accordion-collapse collapse"
            aria-labelledby="headingFour"
          >
            <div class="accordion-body">
              <span class="fs-5 fw-normal"
                >尚未點擊課程者，在七天內皆可聯絡客服全額退費。</span
              >
            </div>
          </div>
        </div>
      </div>
      <div class="mb-3 shadow-sm rounded-3">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingFive">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
              aria-expanded="false"
              aria-controls="collapseFive"
            >
              <span class="fs-5 fw-bolder">幾歲可以開始學圍棋?</span>
            </button>
          </h2>
          <div
            id="collapseFive"
            class="accordion-collapse collapse"
            aria-labelledby="headingFive"
          >
            <div class="accordion-body">
              <span class="fs-5 fw-normal"
                >建議年滿4歲以上的孩子，這階段正是培養孩子大腦發育最佳時刻。</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="position: relative">
    <div class="img-left pb-0">
      <img
        src="../../assets/image/問與答/Section_01_illustration_left.svg"
        alt=""
      />
    </div>
    <div
      class="d-flex justify-content-center flex-column align-items-center pb-md-5 pb-3"
    >
      <div>
        <p class="fs-1 fw-bold lh-1 mb-md-4">找不到答案？</p>
      </div>
      <div>
        <button
          @click.prevent="gotoline"
          class="btn btn-success rounded-pill"
          style="width: 25; width: 150px; padding: 10px 32px"
        >
          聯絡我們
        </button>
      </div>
    </div>
    <div class="img-right pb-0">
      <img
        src="../../assets/image/問與答/Section_01_illustration_right.svg"
        alt=""
      />
    </div>
    <div class="img-all">
      <img
        src="../../assets/image/問與答/Section_01_illustration_all.svg"
        alt=""
      />
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    gotoline() {
      window.open("https://line.me/ti/p/2W3g70s3MG");
    },
  },
};
</script>

<style>
.accordion-border {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
}
.accordion-button:focus {
  box-shadow: none;
  color: none;
}

.accordion-w {
  width: 60%;
}
@media screen and (max-width: 768px) {
  .accordion-w {
    width: 90%;
  }
}
.img-all {
  display: none;
}
.img-left {
  position: absolute;
  bottom: 0px;
  left: 20%;
}
.img-left,
.img-right {
  position: absolute;
  bottom: 0px;
}
.img-right {
  position: absolute;
  bottom: 0px;
  right: 15%;
}
.img-left img,
.img-right img {
  max-width: 80%;
}

/* desktops */
@media (max-width: 1440px) {
  .img-left img,
  .img-right img {
    max-width: 60%;
  }
}
@media (max-width: 1024px) {
  .img-left img,
  .img-right img {
    max-width: 50%;
  }
}
@media (max-width: 920px) {
  .img-right {
    right: 10%;
  }
  .img-left img,
  .img-right img {
    max-width: 40%;
  }
}
/* tablets */
@media (max-width: 768px) {
  .img-left,
  .img-right {
    display: none;
  }
  .img-all {
    display: block;
  }
  .img-all img {
    display: block;
    margin: auto;
    max-width: 100%;
  }
}
</style>
