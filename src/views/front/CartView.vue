<template>
  <div class="wrap">
    <div>
      <stepCirclelist></stepCirclelist>
      <CartItem v-for="i in carts" :key="i.id" :item="i"></CartItem>
      <p class="total-font fw-bold">總計NT$ 7500</p>
      <div class="step-btn">
        <button type="button fw-bold">下一步,填寫資料</button>
      </div>
    </div>
  </div>
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
      item: null,
    };
  },
  computed: {
    ...mapState(cartstore, ["carts"]),
  },
  created() {
    
  },
  mounted() {
  }
};
</script>
<style>
.wrap {
  padding: 0 80px;
  margin: auto;
  max-width: 1440px;
}
@media (max-width: 768px) {
  .wrap {
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
  padding: 12px 40px;
  width: 24px 51px;
  background-color: #ffbfbf;
}
.step-btn button:hover {
  background-color: #ff8080;
}
</style>
