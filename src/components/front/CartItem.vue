<template>
  <div class="cart-item">
    <div class="cart-content">
      <img class="img-fluid" :src="item.product.imageUrl" alt="購物車圖片" />

      <div class="cart-content-title">
        <p>{{ item.product.category }}-{{ item.product.title }}</p>
      </div>
      <div class="cart-content-price">
        <p>NT$ {{ item.product.origin_price }}</p>
        <p>NT$ {{ item.product.price }}</p>
      </div>
    </div>
    <div class="trash-icon">
      <button type="button" class="border-0" @click="DeleteItem(item.id)">
        <i class="bi bi-trash3-fill"></i>
      </button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "pinia";
import { cartstore } from "../../stores/cart";
export default {
  props: ["item"],
  methods: {
    ...mapActions(cartstore, ["deleteitem"]),
    DeleteItem(id) {
      this.deleteitem(id);
    },
  },
};
</script>
<style>
.cart-item {
  display: flex;
  margin-bottom: 32px;
}
.cart-item p {
  margin-bottom: 0px;
}
.cart-content {
  background-color: #ececec;
  width: 90%;
  display: flex;
  padding: 38px 32px;
}
.cart-content img {
  border-radius: 17px;
  width: 40%;
}
.cart-content-title {
  padding-left: 25px;
  font-size: 32px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cart-content-price {
  margin-left: auto;
  padding-right: 35px;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  white-space: nowrap;
}
.cart-content-price p:first-of-type {
  font-size: 32px;
  color: #909090;
  text-align: end;
  text-decoration: line-through;
}
.cart-content-price p:nth-of-type(2) {
  font-size: 40px;
  text-align: end;
}
.trash-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  width: 10%;
  text-align: center;
  background-color: #f6f6f6;
}
.trash-icon:hover {
  background-color: #ff8080;
}
.trash-icon button {
  width: 100%;
  height: 100%;
  background-color: #f6f6f6;
}
.trash-icon button:hover {
  background-color: #ff8080;
}

@media (max-width: 1080px) {
  .cart-content img {
    width: 50%;
    height: auto;
  }
  .cart-content-title {
    font-size: 20px;
  }
  .cart-content-price p:first-of-type {
    font-size: 16px;
  }
  .cart-content-price p:nth-of-type(2) {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .cart-item {
    margin-bottom: 20px;
    flex-direction: column;
  }

  .cart-content {
    padding: 32px 40px;
    width: 100%;
    background-color: #ececec;
    flex-direction: column;
  }

  .cart-content div:first-of-type {
    display: flex;
    justify-content: center;
  }
  .cart-content img {
    width: 100%;
  }
  .cart-content-title {
    font-size: 30px;
    font-weight: 700;
    margin-top: 24px;
    margin-bottom: 24px;
    text-align: center;
  }

  .cart-content-price {
    margin-left: 0px;
    padding: 12px 20px;
    background-color: #f6f6f6;
  }
  .cart-content-price p:first-of-type {
    font-size: 26px;
  }
  .cart-content-price p:nth-of-type(2) {
    font-size: 28px;
  }
  .trash-icon {
    width: 100%;
    font-size: 40px;
  }
}

@media (max-width: 456px) {
  .cart-content-title {
    font-size: 25px;
  }
}

@media (max-width: 375px) {
  .cart-content-title {
    font-size: 20px;
  }
  .cart-content-price p:first-of-type {
    font-size: 14px;
  }
  .cart-content-price p:nth-of-type(2) {
    font-size: 16px;
  }
  .trash-icon {
    padding: 10px 0;
    font-size: 30px;
  }
}
</style>
