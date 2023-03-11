<template>
  <nav class="navbar navbar-expand-md navbar-light bg-primary">
    <div class="container-fluid py-1 px-5">
      <Router-Link
        class="nav-link fw-bolder text-dark fs-6"
        aria-current="page"
        to="/FrontPage"
      >
        <img
          src="../assets/image/header/Logo.svg"
          alt=""
          width="204"
          height="37"
          class="d-inline-block align-text-top"
      /></Router-Link>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse pe-3"
        id="navbarText"
        ref="navbarText"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ps-3">
            <Router-Link
              class="nav-link fw-bolder text-dark fs-6"
              aria-current="page"
              to="/admin/course"
              >課程</Router-Link
            >
          </li>
          <li class="nav-item ps-3">
            <Router-Link
              class="nav-link fw-bolder text-dark fs-6"
              aria-current="page"
              to="/admin/order"
              >訂單</Router-Link
            >
          </li>

          <li class="nav-item ps-3">
            <a
              href="#"
              class="nav-link fw-bolder text-dark fs-6"
              @click.prevent="SignOut"
            >
              登出
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <Router-View></Router-View>
</template>
<script>
import { RouterView, RouterLink } from "vue-router";
export default {
  components: {
    RouterView,
    RouterLink,
  },
  methods: {
    checkAPI() {
      const url = `${import.meta.env.VITE_API}api/user/check`;
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)bigtoken\s*=\s*([^;]*).*$)|^.*$/,
        "$1"
      );
      this.$http.defaults.headers.common.Authorization = `${token}`;
      this.$http.post(url).catch((error) => {
        console.log(error);
        this.$router.push({ path: "/login" });
      });
    },
    SignOut() {
      document.cookie = `bigtoken=; expired=`;
      this.$router.push({ path: "/login" });
    },
  },
  created() {
    this.checkAPI();
  },
};
</script>
