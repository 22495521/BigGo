<template>
  <div
    class="card card-list mb-3 mb-md-0 pt-3 px-3 border border-2 border-dark"
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
        <p class="card-title col-6 mb-0 text-nowrap">{{ data.title }}</p>
        <div
          class="col-6 text-end text-decoration-line-through old-price d-flex justify-content-end align-items-end"
          style="color: #909090"
        >
          <p class="mb-1">NT${{ data.origin_price }}</p>
        </div>
      </div>
      <div class="card-text row">
        <p class="col-6 text-nowrap mt-">適合：{{ data.unit }}</p>
        <div class="col-6 text-end">NT${{ data.price }}</div>
      </div>
      <div>
        <!-- <button
          :class="[color == 1 ? 'btn-success' : 'btnyellow']"
          class="btn w-100 border border-2 border-dark"
          style="
                  padding:7px 15px
                  border: 3px solid #6f6f6f;
                  border-radius: 640px;"
          
        > -->
        <Router-Link
          :class="[color == 1 ? 'btn-success' : 'btnyellow']"
          class="btn w-100 border border-2 border-dark"
          style="
                  padding:7px 15px
                  border: 3px solid #6f6f6f;
                  border-radius: 640px;"
          :to="`Course/${data.id}`"
          >課程總覽</Router-Link
        >
        <!-- 課程詳情 -->
        <!-- </button> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data", "color"],
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
    font-size: 20px;
  }
  .old-price {
    font-size: 10px;
  }
  .card-text p {
    font-size: 13px;
  }
  .card-text div {
    font-size: 11px;
  }
}
@media (min-width: 1200px) {
  .card-title {
    font-size: 32px;
  }
  .old-price {
    font-size: 16px;
  }
  .card-text p {
    font-size: 20px;
  }
  .card-text div {
    font-size: 23px;
  }
}

.btnyellow {
  background-color: #ffdfa0;
}
.btnyellow:hover {
  background-color: #fae8c5;
}
</style>
