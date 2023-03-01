<template>
  <div class="bg-info">
    <p class="mb-0 fw-bold fs-2 text-center pt-5">熱門課程</p>
    <div
      class="d-flex flex-column flex-md-row container justify-content-md-center align-items-center"
    >
      <div class="col-md-4 col-lg-4 col-xl-3 col-10 px-2 py-4">
        <div
          class="card p-3"
          style="width: 100%; border-radius: 20px; border: 3px solid #6f6f6f"
        >
          <img
            src="../../assets/image/首頁/Section_05_img01.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body pb-0 text-nowrap">
            <div class="d-flex pb-0">
              <h4 class="card-title lh-1" style="font-weight: 700">入門</h4>
              <div class="ms-auto fs-6 text-decoration-line-through pb-0">
                <p class="pb-0 pt-2 text-danger mb-0" style="font-size: 12px">
                  NT$ 3000
                </p>
              </div>
            </div>

            <div class="card-text d-flex">
              <p>適合:零基礎</p>
              <p class="ms-auto">NT$ 2500</p>
            </div>
            <div class="d-flex justify-content-center text-nowrap">
              <button
                href="#"
                class="btn btn-primary btn btn-success rounded-pill"
                style="
                  padding: 3% 39%;
                  border-radius: 20px;
                  border: 3px solid #6f6f6f;
                "
              >
                課程詳情
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-4 col-xl-3 col-10 px-2 py-4">
        <div
          class="card p-3"
          style="width: 100%; border-radius: 20px; border: 3px solid #6f6f6f"
        >
          <img
            src="../../assets/image/首頁/Section_05_img01.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body pb-0 text-nowrap">
            <div class="d-flex pb-0">
              <h4 class="card-title lh-1" style="font-weight: 700">初級A</h4>
              <div class="ms-auto fs-6 text-decoration-line-through pb-0">
                <p class="pb-0 pt-2 text-danger mb-0" style="font-size: 12px">
                  NT$ 3000
                </p>
              </div>
            </div>

            <div class="card-text d-flex">
              <p>適合:零基礎</p>
              <p class="ms-auto">NT$ 2500</p>
            </div>
            <div class="d-flex justify-content-center text-nowrap">
              <button
                href="#"
                class="btn btn-primary btn btn-success rounded-pill"
                style="
                  padding: 3% 39%;
                  border-radius: 20px;
                  border: 3px solid #6f6f6f;
                "
              >
                課程詳情
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-lg-4 col-xl-3 col-10 px-2 py-4">
        <div
          class="card p-3"
          style="width: 100%; border-radius: 20px; border: 3px solid #6f6f6f"
        >
          <img
            src="../../assets/image/首頁/Section_05_img01.jpg"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body pb-0 text-nowrap">
            <div class="d-flex pb-0">
              <h4 class="card-title lh-1" style="font-weight: 700">初級B</h4>
              <div class="ms-auto fs-6 text-decoration-line-through pb-0">
                <p class="pb-0 pt-2 text-danger mb-0" style="font-size: 12px">
                  NT$ 3000
                </p>
              </div>
            </div>

            <div class="card-text d-flex">
              <p>適合:零基礎</p>
              <p class="ms-auto">NT$ 2500</p>
            </div>
            <div class="d-flex justify-content-center text-nowrap">
              <button
                href="#"
                class="btn btn-primary btn btn-success rounded-pill"
                style="
                  padding: 3% 39%;
                  border-radius: 20px;
                  border: 3px solid #6f6f6f;
                "
              >
                課程詳情
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pt-3 py-5 justify-content-center d-flex">
      <Router-Link
        class="btn btn-primary rounded-pill"
        style="padding: 15px 80px; font-size: 24px"
        aria-current="page"
        to="/CourseOverview"
        @click="scrollToTop"
        >更多課程</Router-Link
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>
