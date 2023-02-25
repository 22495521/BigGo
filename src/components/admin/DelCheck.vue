<template>
  <div
    id="delProductModal"
    ref="delProductModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="delProductModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content border-0">
        <div class="modal-header text-white" style="background-color:black">
          <h5 id="delProductModalLabel" class="modal-title">
            <span>刪除產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          是否刪除
          <strong class="text-danger"></strong> 商品(刪除後將無法恢復)。
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-lg btn-darklight"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn-lg btn btn-success" @click="delData">
            確認刪除
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
      isorder: null, //0為課程,1為訂單
      id: null,
      myModal: null,
      url: null,
      path: null,
    };
  },
  methods: {
    openModal(id) {
      this.myModal.show();
      this.id = id;
    },
    delData() {
      //此為課程刪除
      if (this.isorder == 0) {
        this.$http
          .delete(`${this.url}/api/${this.path}/admin/product/${this.id}`)
          .then(() => {
            this.myModal.hide();
            this.$emit("getData");
          })
          .catch((error) => {
            console.log(error);
          });
      }

      //此為訂單
      if (this.isorder == 1) {
        this.$http
          .delete(`${this.url}/api/${this.path}/admin/order/${this.id}`)
          .then(() => {
            this.myModal.hide();
            this.$emit("getData");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
  },
  created() {
    this.url = import.meta.env.VITE_API;
    this.path = import.meta.env.VITE_APIPATH;
  },
  mounted() {
    const myModal = new Modal(this.$refs.delProductModal);
    this.myModal = myModal;
  },
};
</script>
