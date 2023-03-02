<template>
  <div class="container">
    <div class="mx-auto" style="max-width: 1156px">
      <div class="px-4 px-md-0">
        <h2
          class="fw-bolder text-center text-md-start my-5"
          style="font-size: 40px"
        >
          啟蒙班
        </h2>
        <div
          class="p-5 py-lg-7 flex-md-row justify-content-md-center"
          style="
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
          "
        >
          <div class="d-flex flex-column flex-lg-row">
            <div class="rowwidth d-flex align-items-start">
              <div class="pt-lg-4">
                <img
                  src="../../assets/image/課程總覽/Section_02_啟蒙班.jpg"
                  class="img-fluid"
                  style="border-radius: 16px"
                  alt=""
                />
              </div>
            </div>
            <div class="rowwidth ps-lg-5">
              <p
                class="border-bottom border-2 border-dark text-center text-md-start py-4"
              >
                <span class="font-title fw-bold">入門</span><br /><span
                  class="font-content"
                  >適合：零基礎</span
                >
              </p>
              <p class="font-content py-2">
                適合完全零基礎的學員，從最基本的數氣、長氣、吃棋以及算地盤，帶您一步步認識圍棋。
              </p>
              <div
                class="p-4 p-md-1 px-md-4 text-end"
                style="background-color: #f6f6f6"
              >
                <span
                  class="fs-6 text-decoration-line-through"
                  style="color: #909090"
                  >NT$ 3000</span
                ><br />
                <span class="fs-2 fw-bolder" style="color: #6f6f6f"
                  >NT$ 2500</span
                >
              </div>
            </div>
          </div>
          <div class="text-md-end text-center mt-5">
            <button
              type="button "
              class="btn btn-success rounded-pill fs-5"
              style="width: 243px; height: 61px; padding: 12px 32px"
            >
              <i class="bi bi-cart-fill me-3 btn-icon"></i>加入購物車
            </button>
          </div>
        </div>
      </div>
      <div class="px-4 px-md-0">
        <h2
          class="fw-bolder text-center text-md-start my-5"
          style="font-size: 40px"
        >
          課程大綱
        </h2>
        <div
          class="d-flex flex-column p-5 flex-md-row justify-content-md-center"
          style="
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
          "
        >
          <div class="d-flex flex-column outline">
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第一堂:基本下法
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第二堂:雙方氣盡
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第三堂:打劫及虎口
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第四堂:死亡線
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第五堂:棋的戰鬥
            </div>
          </div>
          <div class="d-flex flex-column outline">
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第六堂:連接手法
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第七堂:金角銀邊草肚皮
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第八堂:征子
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第九堂:兩眼活棋
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第十堂:比目法
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
    };
  },
  methods: {
    getId() {
      this.id = this.$route.params.id;
    },
  },
  created() {
    this.getId();
  },
  mounted() {},
};
</script>

<style>
.font-content {
  font-size: 20px;
}
.font-title {
  font-size: 24px;
}
@media screen and (min-width: 768px) {
  .outline {
    width: 42%;
    padding: 2%;
  }
  .font-content {
    font-size: 16px;
  }
  .font-title {
    font-size: 32px;
  }
}
.img-circle {
  border-radius: 50%;
}
@media screen and (min-width: 992px) {
  .rowwidth {
    width: 50%;
  }
}
.btn-icon {
  font-size: 1.5rem;
}
</style>
