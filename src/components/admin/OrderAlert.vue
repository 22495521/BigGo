<template>
  <div
    id="OrderModal"
    ref="OrderModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="OrderModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 id="OrderModalLabel" class="modal-title">
            <span>訂單詳情</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body mt-5">
          <div class="row"></div>
        </div>
        <div class="modal-footer justify-content-center py-3">
          <button
            type="button"
            class="btn btn-lg"
            style="background-color: #cccccc"
            data-bs-dismiss="modal"
          >
            取消
          </button>
          <button type="button" class="btn-lg btn btn-success">完成</button>
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
    };
  },
  methods: {
    openModal() {
      this.myModal.show();
    },
  },
  mounted() {
    const myModal = new Modal(this.$refs.OrderModal);
    this.myModal = myModal;
  },
};
</script>
