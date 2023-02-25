<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :is-full-page="fullPage"
  >
    <div class="loadingio-spinner-dual-ball-laqyobj2qgl">
      <div class="ldio-sh19xg6jfo">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
  <div class="container my-5">
    <div class="d-flex mb-5">
      <div class="flex-grow-1 text-center">
        <h2 style="font-size: 48px; mb-0">課程管理</h2>
      </div>
      <div>
        <button
          class="btn btn-success text-nowrap"
          style="padding: 8px 32px; width: 160px; height: 64px; font-size: 24px"
          @click="addCourse"
        >
          新增課程
        </button>
      </div>
    </div>
    <div class="mb-4">
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
                @click.prevent="editCourse(item)"
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
                @click.prevent="daleteCourse(item.id)"
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
  <Coursedel-Check ref="delModal" @getData="getData"></Coursedel-Check>
  <Course-Alert ref="courseModal" @getData="getData"></Course-Alert>
</template>

<script>
import CourseAlert from "../../components/admin/CourseAlert.vue";
import CoursedelCheck from "../../components/admin/DelCheck.vue";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
export default {
  components: {
    CourseAlert,
    CoursedelCheck,
    Loading,
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
      products: {},
      fullPage: true,
      isLoading: false,
    };
  },
  methods: {
    getData() {
      const url = `${this.url}api/${this.path}/admin/products/?page=${this.Nowpage}`;
      this.$http
        .get(url)
        .then((res) => {
          this.products = res.data.products;
          this.pagination = { ...res.data.pagination };
          this.total_pages = res.data.pagination.total_pages;
          this.has_pre = res.data.pagination.has_pre;
          this.has_next = res.data.pagination.has_next;
          this.doAjax();
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addCourse() {
      this.$refs.courseModal.isaddCourse();
      this.$refs.courseModal.cleartAlert();
      this.$refs.courseModal.openModal();
    },
    editCourse(data) {
      this.$refs.courseModal.iseditCourse();
      this.$refs.courseModal.AlertData.data = data;
      this.$refs.courseModal.openModal();
    },
    daleteCourse(id) {
      this.$refs.delModal.isorder = 0;
      this.$refs.delModal.openModal(id);
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
    doAjax() {
      this.isLoading = true;
      // simulate AJAX
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
    },
  },
  created() {
    this.url = import.meta.env.VITE_API;
    this.path = import.meta.env.VITE_APIPATH;
    this.getData();
  },
};
</script>
