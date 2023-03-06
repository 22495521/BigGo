<template>
  <StepCirclelist></StepCirclelist>
  <div class="wrap px-4 px-md-2">
    <p class="fs-1 fw-bold text-center">
      <font-awesome-icon icon="thumbs-up" class="me-2" />感謝您的購買!
    </p>
    <p class="fs-4 text-center">
      已傳送課程連結至您的信箱，若有任何問題歡迎聯絡我們。
    </p>
    <div class="p-3 p-md-5 mb-4" style="background-color: #f6f6f6">
      <p class="table-font mb-2">訂單明細</p>
      <table class="table border-bottom mb-0">
        <thead>
          <tr class="table-font" style="background-color: #cccccc">
            <td scope="col" class="ps-4">商品名稱</td>
            <td scope="col" class="text-end pe-4">價格</td>
          </tr>
        </thead>
        <tbody>
          <tr class="table-font">
            <td scope="row" class="ps-4">啟蒙班-入門</td>
            <td class="text-end pe-4">NT$2500</td>
          </tr>
          <tr class="table-font">
            <td scope="row" class="ps-4">啟蒙班-入門</td>
            <td class="text-end pe-4">NT$2500</td>
          </tr>
          <tr class="table-font">
            <td scope="row" class="ps-4">啟蒙班-入門</td>
            <td class="text-end pe-4">NT$2500</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-font">
            <td></td>
            <td class="text-end pe-4">總計NT$7500</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="text-center mb-5">
      <Router-Link to="/CourseOverview">
        <button
          type="button"
          @click="scrollToTop"
          class="btn-red noborder rounded-pill btn-lg px-5 py-2"
        >
          繼續逛逛
        </button>
      </Router-Link>
    </div>
  </div>
</template>
<script>
import StepCirclelist from "../../components/front/StepCirclelist.vue";
export default {
  components: {
    StepCirclelist,
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },

};
</script>

<style>
.wrap {
  max-width: 1240px;
  margin: auto;
}
.table-font {
  font-size: 12px;
}
@media screen and (min-width: 425px) {
  .table-font {
    font-size: 16px;
  }
}
@media screen and (min-width: 768px) {
  .table-font {
    font-size: 26px;
  }
}
.border-bottom tbody tr,
.border-bottom tfoot tr {
  border-bottom: 2px solid #cccccc;
}
.noborder {
  border: none;
}
.btn-red {
  background-color: #ffb7b7;
}
.btn-red:hover {
  background-color: #ff8080;
}
</style>
