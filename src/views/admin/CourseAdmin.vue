<template>
  <div class="container my-5">
    <div class="d-flex mb-5">
      <div class="flex-grow-1 text-center">
        <h2 style="font-size: 48px; mb-0">課程管理</h2>
      </div>
      <div>
        <button
          class="btn btn-success text-nowrap"
          style="padding: 8px 32px; width: 160px; height: 64px; font-size: 24px"
        >
          新增課程
        </button>
      </div>
    </div>
    <div>
      <table class="table text-center" style="font-size: 20px">
        <thead>
          <tr>
            <th scope="col" style="width: 20%">課程類別</th>
            <th scope="col" style="width: 20%">課程名稱</th>
            <th scope="col" style="width: 20%">售價</th>
            <th scope="col" style="width: 20%">是否啟用</th>
            <th scope="col" style="width: 20%">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td>NT{{ item.price }}</td>
            <td v-if="item.is_enabled" style="color: green">啟用</td>
            <td v-else style="color: red">不啟用</td>
            <td class="d-flex p-0 justify-content-center">
              <a
                href="#"
                style="
                  text-decoration: none;
                  display: block;
                  width: 50%;
                  height: 100%;
                  background-color: #e8f8e7;
                  padding: 0.5rem 28px 0.5rem 28px;
                  color: black;
                "
                >編輯</a
              >
              <a
                href="#"
                style="
                  text-decoration: none;
                  display: block;
                  width: 50%;
                  height: 100%;
                  background-color: #f8e7e7;
                  padding: 0.5rem 28px 0.5rem 28px;
                  color: black;
                "
                >編輯</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: "",
      path: "",
      products: {},
    };
  },
  methods: {
    getData() {
      this.url = import.meta.env.VITE_API;
      this.path = import.meta.env.VITE_APIPATH;
      const url = `${this.url}api/${this.path}/admin/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          console.log(this.products);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.getData();
  },
};
</script>
