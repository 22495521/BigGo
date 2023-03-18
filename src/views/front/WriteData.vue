<template>
  <div class="WriteDatawrap px-5 px-md-3">
    <StepCirclelist :step="2"></StepCirclelist>
    <v-form ref="form" v-slot="{ errors }" @submit="onSubmit">
      <div class="mb-4">
        <label for="email" class="form-label mb-1 fs-5"
          >Email<span style="color: red"> *</span></label
        >
        <VField
          style="background-color: #f2f2f2"
          type="email"
          rules="email|required"
          class="form-control noborder"
          :class="{ 'is-invalid': errors['email'] }"
          id="email"
          name="email"
        />
        <error-message name="email" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-4">
        <label for="name" class="form-label mb-1 fs-5"
          >姓名<span style="color: red"> *</span></label
        >
        <VField
          style="background-color: #f2f2f2"
          type="text"
          rules="required"
          :class="{ 'is-invalid': errors['姓名'] }"
          class="form-control noborder"
          id="name"
          name="姓名"
        />
        <error-message name="姓名" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-4">
        <label for="電話" class="form-label mb-1 fs-5"
          >電話<span style="color: red"> *</span></label
        >
        <VField
          style="background-color: #f2f2f2"
          type="tel"
          :class="{ 'is-invalid': errors['電話'] }"
          class="form-control noborder"
          id="電話"
          :rules="isPhone"
          name="電話"
        />
        <error-message name="電話" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-4">
        <label for="address" class="form-label mb-1 fs-5"
          >地址<span style="color: red"> *</span></label
        >
        <VField
          name="地址"
          style="background-color: #f2f2f2"
          type="text"
          rules="required"
          :class="{ 'is-invalid': errors['地址'] }"
          class="form-control noborder"
          id="address"
        />
        <error-message name="地址" class="invalid-feedback"></error-message>
      </div>
      <div class="mb-4">
        <label for="message" class="mb-1 fs-5">留言</label>
        <textarea
          class="form-control noborder"
          id="message"
          v-model="textarea"
          style="height: 180px; background-color: #f2f2f2"
        ></textarea>
      </div>
      <div
        class="text-center my-5 d-flex flex-column-reverse flex-md-row justify-content-center"
      >
        <div>
          <button
            @click.prevent="backCart"
            type="button"
            class="btndark noborder text-nowrap rounded-pill py-2 px-5 mx-4"
          >
            返回訂單
          </button>
        </div>
        <div class="mb-3 mb-md-0">
          <button
            :disabled="carts.length == 0"
            type="submit"
            class="noborder btn-lg text-nowrap btn-red rounded-pill py-2 px-5 mx-4"
          >
            確認付款
          </button>
        </div>
      </div>
    </v-form>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { cartstore } from "../../stores/cart";
import StepCirclelist from "../../components/front/StepCirclelist.vue";
export default {
  components: {
    StepCirclelist,
  },
  data() {
    return {
      isLoading: false,
      cartData: null,
      textarea: "",
    };
  },
  computed: {
    ...mapState(cartstore, ["carts"]),
  },
  methods: {
    ...mapActions(cartstore, ["getitem"]),
    isPhone(value) {
      const phoneNumber = /^(09)[0-9]{8}$/;
      return phoneNumber.test(value) ? true : "需要正確的電話號碼";
    },
    onSubmit(value) {
      let order = {
        data: {
          user: {
            name: "",
            email: "",
            tel: "",
            address: "",
          },
          message: "",
        },
      };
      order.data.message = this.textarea;
      order.data.user.name = value.姓名;
      order.data.user.email = value.email;
      order.data.user.tel = value.電話;
      order.data.user.address = value.地址;
      // order.data.user = { ...value };
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_APIPATH
      }/order`;
      this.$http
        .post(url, order)
        .then((res) => {
          this.getitem();
          this.scrollTo();
          this.$router.push({
            path: "ThankyouBuy",
            query: {
              id: res.data.orderId,
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    scrollTo() {
      window.scrollTo(0, 0);
    },
    backCart() {
      this.scrollTo();
      this.$router.push("/Cartview");
    },
  },
};
</script>

<style>
.WriteDatawrap {
  max-width: 863px;
  margin: auto;
}
.noborder {
  border: none;
}
.btndark {
  background-color: #cccccc;
}
.btndark:hover,
.btndark:active {
  background-color: #909090;
}
.btn-red {
  background-color: #ffb7b7;
}
.btn-red:hover,
.btn-red:active {
  background-color: #ff8080;
}
</style>
