<template>
  <div class="container my-5">
    <div class="d-flex mb-5">
      <div class="flex-grow-1 text-center">
        <h2 style="font-size: 48px; mb-0">訂單管理</h2>
      </div>
    </div>
    <div class="mb-4">
      <table class="table text-center" style="font-size: 20px">
        <thead>
          <tr>
            <th scope="col" style="width: 20%">訂單編號</th>
            <th scope="col" style="width: 20%">訂單日期</th>
            <th scope="col" style="width: 20%">姓名</th>
            <th scope="col" style="width: 20%">Email</th>
            <th scope="col" style="width: 20%">操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="order in orders" :key="order.id">
            <td class="text-nowrap">{{ order.id }}</td>
            <td>{{ formatDate(order.create_at) }}</td>
            <td>{{ order.user.name }}</td>
            <td>{{ order.user.email }}</td>
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
                  color: black;"
                @click.prevent="openDetail(order)"
                >詳情</a
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
                @click.prevent="daleteOrder(order.id)"
                >刪除</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="d-flex justify-content-center">
      <nav aria-label="Page navigation">
        <ul class="pagination pagination-lg">
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              :class="{ disabled: has_pre == false }"
              @click.prevent="reducePage"
              >上一頁</a
            >
          </li>
          <li
            class="page-item"
            :class="{ active: Nowpage == item }"
            v-for="item in total_pages"
            :key="`${item}1234`"
            @click.prevent="clickpage(item)"
          >
            <a class="page-link" href="#">{{ item }}</a>
          </li>
          <li class="page-item">
            <a
              class="page-link"
              href="#"
              :class="{ disabled: has_next == false }"
              @click.prevent="plusPage"
              >下一頁</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <Del-Check ref="delModal" @getData="getData"></Del-Check>
  <OrderAlert ref="editModal"></OrderAlert>
  <orderDetail ref="DetailModal"></orderDetail>
</template>

<script>
import DelCheck from "../../components/admin/DelCheck.vue";
import OrderAlert from "../../components/admin/OrderAlert.vue";
import orderDetail from "../../components/admin/OrderDetail.vue";
export default {
  components: {
    DelCheck,
    OrderAlert,
    orderDetail,
  },
  data() {
    return {
      url: "",
      path: "",
      total_pages: null,
      has_pre: null,
      has_next: null,
      Nowpage: 1,
      pagination: null,
      orders: {},
    };
  },
  methods: {
    getData() {
      const url = `${this.url}api/${this.path}/admin/orders?page=${this.Nowpage}`;
      this.$http
        .get(url)
        .then((res) => {
          this.orders = res.data.orders;
          this.pagination = res.data.pagination;
          this.total_pages = res.data.pagination.total_pages;
          this.has_next = res.data.pagination.has_next;
          this.has_pre = res.data.pagination.has_pre;
          console.log(this.orders);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    openDetail(order) {
      this.$refs.DetailModal.openModal(order);
    },
    daleteOrder(id) {
      this.$refs.delModal.isorder = 1;
      this.$refs.delModal.openModal(id);
    },
    formatDate(data) {
      const date = new Date(data * 1000);
      return date.toLocaleString(date);
    },
    clickpage(page) {
      this.Nowpage = page;
      this.getData();
    },
    plusPage() {
      this.Nowpage += 1;
      this.getData();
    },
    reducePage() {
      this.Nowpage -= 1;
      this.getData();
    },
  },
  created() {
    this.url = import.meta.env.VITE_API;
    this.path = import.meta.env.VITE_APIPATH;
    this.getData();
  },
};
</script>
