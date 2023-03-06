<template>
  <div class="wrap px-5 px-md-3">
    <StepCirclelist></StepCirclelist>
    <div class="mb-4">
      <label for="email" class="form-label mb-1 fs-5">Email</label>
      <input
        style="background-color: #f2f2f2"
        type="text"
        class="form-control noborder"
        id="email"
      />
    </div>
    <div class="mb-4">
      <label for="name" class="form-label mb-1 fs-5">姓名</label>
      <input
        style="background-color: #f2f2f2"
        type="text"
        class="form-control noborder"
        id="name"
      />
    </div>
    <div class="mb-4">
      <label for="phone" class="form-label mb-1 fs-5">手機</label>
      <input
        style="background-color: #f2f2f2"
        type="tel"
        class="form-control noborder"
        id="phone"
        pattern="[0-9+ -]{10,}"
        title="請輸入正確的手機號碼，必須是數字、+、- 或空格，至少 10 個字符"
        required
      />
    </div>
    <div class="mb-4">
      <label for="address" class="form-label mb-1 fs-5">地址</label>
      <input
        style="background-color: #f2f2f2"
        type="text"
        class="form-control noborder"
        id="address"
      />
    </div>
    <div class="mb-4">
      <label for="floatingTextarea2" class="mb-1 fs-5">留言</label>
      <textarea
        class="form-control noborder"
        id="floatingTextarea2"
        style="height: 180px; background-color: #f2f2f2"
      ></textarea>
    </div>
    <div
      class="text-center my-5 d-flex flex-column-reverse flex-md-row justify-content-center"
    >
      <div>
        <Router-Link to="/Cartview">
          <button
            type="button"
            class="btndark noborder text-nowrap rounded-pill py-2 px-5 mx-4"
          >
            返回訂單
          </button></Router-Link
        >
      </div>
      <div class="mb-3 mb-md-0">
        <Router-Link to="/ThankyouBuy">
          <button
            type="button"
            class=" noborder btn-lg text-nowrap btn-red rounded-pill py-2 px-5 mx-4"
          >
            確認付款
          </button>
        </Router-Link>
      </div>
    </div>
  </div>
</template>

<script>
import StepCirclelist from "../../components/front/StepCirclelist.vue";
export default {
  components: {
    StepCirclelist,
  },
};
</script>

<style>
.wrap {
  max-width: 863px;
  margin: auto;
}
.noborder {
  border: none;
}
.btndark {
    background-color: #cccccc;
}
.btndark:hover {
    background-color: #909090;
}
.btn-red {
  background-color: #ffb7b7;
}
.btn-red:hover {
  background-color: #ff8080;
}
</style>
