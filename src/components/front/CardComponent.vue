<template>
  <div
    class="card card-list col-8 col-md-4 col-lg-4 col-xl-3 col-xxl-3 mb-3 mb-md-0 pt-3 px-3 border border-2 border-dark"
    style="border-radius: 12px"
  >
    <img
      :src="data.imageUrl"
      style="border-radius: 12px"
      class="card-img-top img-fluid"
      alt="..."
    />
    <div class="card-body">
      <div class="row">
        <p class="card-title col-6 mb-0 text-nowrap fw-bolder">
          {{ data.title }}
        </p>
        <div
          class="col-6 text-end text-decoration-line-through old-price d-flex justify-content-end align-items-end"
          style="color: #909090"
        >
          <p class="mb-1">NT${{ data.origin_price }}</p>
        </div>
      </div>
      <div class="card-text row">
        <p class="col-6 text-nowrap font-normal">適合：{{ data.unit }}</p>
        <div class="col-6 text-end text-nowrap">NT${{ data.price }}</div>
      </div>
      <div>
        <Router-Link
          :class="[color == 1 ? 'card-btn-red' : 'card-btn-yellow']"
          class="btn border border-2 border-dark"
          @click="scrollToTop"
          style="
                  width: 100%;
                  padding:7px 15px
                  border: 3px solid #6f6f6f;
                  border-radius: 640px;"
          :to="`Course/${data.id}`"
          >課程詳情</Router-Link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "color"],

  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style>
.card-list {
  width: 60%;
}
.card-title {
  font-size: 25px;
}
.old-price {
  font-size: 13px;
}
.card-text p {
  font-size: 17px;
}
.card-text div {
  font-size: 15px;
}
@media (min-width: 768px) {
  .card-list {
    width: 31%;
    margin: 2% 1%;
    max-width: 385px;
  }
  .card-title {
    font-size: 18px;
  }
  .old-price {
    font-size: 7px;
  }
  .card-text p {
    font-size: 11px;
  }
  .card-text div {
    font-size: 11px;
  }
}
@media (min-width: 1200px) {
  .card-title {
    font-size: 26px;
  }
  .old-price {
    font-size: 12px;
  }
  .card-text p {
    font-size: 18px;
  }
  .card-text div {
    font-size: 18px;
  }
}
.card-btn-red {
  background-color: #ffb7b7;
}
.card-btn-red:hover,
.card-btn-red:active {
  background-color: #ff8080;
}
.card-btn-yellow {
  background-color: #ffdfa0;
}
.card-btn-yellow:hover,
.card-btn-yellow:active {
  background-color: #ffc655;
}
</style>
