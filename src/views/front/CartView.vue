<template>
  <div class="CartViewwrap">
    <div v-if="carts[0]">
      <stepCirclelist :step="1"></stepCirclelist>
      <CartItem v-for="i in carts" :key="i.id" :item="i"></CartItem>
      <p class="total-font fw-bold">總計NT$ {{ gettal }}</p>
      <div class="step-btn">
        <Router-Link to="/WriteData" @click="scrollToTop"
          ><button type="button" class="fw-bold px-5 py-2 text-dark">
            下一步,填寫資料
          </button></Router-Link
        >
      </div>
    </div>
    <div v-else class="text-center step-btn">
      <p class="fw-bold fs-2 mb-4">無任何訂單</p>
      <Router-Link to="/CourseOverview"
        ><button
          type="button"
          class="fw-bold rounded-pill fs-5 px-5 py-2 text-dark"
        >
          來去逛逛逛
        </button></Router-Link
      >
      <div class="mt-5">
        <img
          src="../../assets/image/購物車頁面/illustration01.svg"
          alt="無任何訂單圖片"
          class="img-fluid"
        />
      </div>
    </div>
  </div>
  <div></div>
</template>

<script>
import { mapState } from "pinia";
import { cartstore } from "../../stores/cart";
import CartItem from "../../components/front/CartItem.vue";
import stepCirclelist from "../../components/front/StepCirclelist.vue";
export default {
  components: {
    stepCirclelist,
    CartItem,
  },
  data() {
    return {
      total: null,
    };
  },
  computed: {
    ...mapState(cartstore, ["gettal"]),
    ...mapState(cartstore, ["carts"]),
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  created() {},
  mounted() {},
};
</script>
<style>
.CartViewwrap {
  padding: 0 80px;
  margin: auto;
  max-width: 1440px;
}
@media (max-width: 768px) {
  .CartViewwrap {
    padding: 0 20px;
  }
}
.total-font {
  background-color: #cccccc;
  font-size: 24px;
  text-align: end;
  padding: 20px 40px;
  font-weight: 500;
}
@media (max-width: 768px) {
  .total-font {
    text-align: center;
  }
}
.step-btn {
  text-align: center;
  margin-top: 32px;
  margin-bottom: 56px;
}
.step-btn button {
  border-radius: 1000px;
  border: none;
  background-color: #ffbfbf;
}
.step-btn button:hover,
.step-btn button:active {
  background-color: #ff8080;
}
</style>
