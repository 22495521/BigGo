<template>
  <div
    id="DetailModal"
    ref="DetailModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="DetailModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="DetailModalLabel" class="modal-title">
            <span>訂單詳情</span>
          </h5>
          <button
            type="button"
            class="btn-close btn-close-white"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-center pt-5">
          <div style="width: 60%; line-height: 140%">
            <p class="fw-bold" style="font-size: 24px">客戶資訊</p>
            <div style="font-size: 20px">
              <p>Email : {{ user.email }}</p>
              <p>姓名 : {{ user.name }}</p>
              <p>手機 : {{ user.tel }}</p>
              <p>地址 : {{ user.address }}</p>
            </div>
            <hr style="border: 2px solid #cccccc" />
            <p class="fw-bold" style="font-size: 24px">訂單資訊</p>
            <div style="font-size: 20px">
              <p>訂單編號 : {{ order.id }}</p>
              <p>訂單日期 : {{ formatDate(order.create_at) }}</p>
              <p>留言 : {{ order.message }}</p>
            </div>
            <hr style="border: 2px solid #cccccc" />
            <p class="fw-bold" style="font-size: 24px">訂單明細</p>
            <div style="font-size: 20px">
              <div
                v-for="item in products"
                :key="item.id"
                class="d-flex justify-content-between"
              >
                <p>{{ item.product.category }}-{{ item.product.title }}</p>
                <p>NT${{ item.total }}</p>
              </div>
              <div
                class="d-flex justify-content-between py-3 px-3"
                style="background-color: #efefef"
              >
                <p class="mb-0">總計金額</p>
                <p class="mb-0">NT${{ total }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer justify-content-center" style="border: none">
          <button
            type="button"
            class="btn btn-lg btn-darklight"
            data-bs-dismiss="modal"
          >
            關閉
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "bootstrap/js/dist/modal";
export default {
  data() {
    return {
      myModal: null,
      products: null,
      user: {
        name: null,
      },
      order: { id: null },
      total: null,
    };
  },
  methods: {
    openModal(order) {
      this.order = order;
      this.products = order.products;
      this.user = order.user;
      this.total = order.total;
      this.myModal.show();
      console.log(this.order);
    },
    formatDate(data) {
      const date = new Date(data * 1000);
      return date.toLocaleString(date);
    },
  },
  mounted() {
    const myModal = new Modal(this.$refs.DetailModal);
    this.myModal = myModal;
  },
};
</script>
