import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";
export const cartstore = defineStore("cart", {
  state: () => ({
    carts: [],
  }),
  getters: {
    getnum(state) {
      return state.carts.length;
    },
  },
  actions: {
    getitem() {
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_APIPATH
      }/cart`;
      axios
        .get(url)
        .then((res) => {
          this.carts = res.data.data.carts;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    additem(item) {
      //確認是否已經新增過了 0是還沒 1是有了
      let isadd = 0;
      this.carts.forEach(function (i) {
        if (i.product.title == item.title) {
          isadd = 1;
        }
      });
      if (!isadd) {
        const url = `${import.meta.env.VITE_API}api/${
          import.meta.env.VITE_APIPATH
        }/cart`;
        let data = {
          data: {
            product_id: item.id,
            qty: 1,
          },
        };
        axios
          .post(url, data)
          .then(() => {
            this.getitem();
            Swal.fire({
              icon: "success",
              title: "成功加入購物車",
              showConfirmButton: false,
              timer: 1000,
            });
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        Swal.fire({
          icon: "warning",
          title: "購物車已經有了喔！",
          showConfirmButton: false,
          timer: 1000,
        });
        return;
      }
    },
    deleteitem(id) {
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_APIPATH
      }/cart/${id}`;
      axios
        .delete(url)
        .then(() => {
          this.getitem();
          Swal.fire({
            icon: "success",
            title: "成功刪除單一課程",
            showConfirmButton: false,
            timer: 1000,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
});
