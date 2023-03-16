<template>
  <loading v-model:active="isLoading" :can-cancel="false">
    <div class="loadingio-spinner-dual-ball-laqyobj2qgl">
      <div class="ldio-sh19xg6jfo">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
  <StepCirclelist :step="3"></StepCirclelist>
  <div v-if="order" class="wrap px-4 px-md-2">
    <p class="fs-1 fw-bold text-center">
      <font-awesome-icon icon="thumbs-up" class="me-2" />感謝您的購買!
    </p>
    <p class="fs-4 text-center mb-4">
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
          <tr class="table-font" v-for="item in order.products" :key="item.id">
            <td scope="row" class="ps-4">
              {{ item.product.category }}-{{ item.product.title }}
            </td>
            <td class="text-end pe-4">NT${{ item.total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="table-font">
            <td></td>
            <td class="text-end pe-4">總計NT${{ order.total }}</td>
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
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import StepCirclelist from "../../components/front/StepCirclelist.vue";
export default {
  components: {
    StepCirclelist,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      order: null,
      orderId: null,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
    getbuyorder() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_APIPATH
      }/order/${this.orderId}`;
      this.$http
        .get(url)
        .then((res) => {
          this.order = res.data.order;
          if (!this.order) {
            this.$router.push("FrontPage");
          }
          this.isLoading = false;
        })
        .catch(function (err) {
          console.log(err);
        });
    },
  },
  created() {
    this.orderId = this.$route.query.id;
    this.getbuyorder();
  },
  mounted() {},
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
.btn-red:hover,
.btn-red:active {
  background-color: #ff8080;
}
</style>
