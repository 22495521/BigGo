<template>
  <!-- <loading
    v-model:active="isLoading"
    :can-cancel="false"
    :on-cancel="onCancel"
    :is-full-page="fullPage"
  >
    <div class="loadingio-spinner-dual-ball-laqyobj2qgl">
      <div class="ldio-sh19xg6jfo">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading> -->
  <nav class="navbar navbar-expand-md navbar-light bg-primary" ref="navbar">
    <div class="container-fluid">
      <Router-Link
        class="nav-link fw-bolder text-dark fs-6"
        aria-current="page"
        to="/FrontPage"
      >
        <img
          src="../assets/image/header/Logo.svg"
          alt=""
          width="226"
          height="41"
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
        :class="{ hide: ishide }"
        id="navbarText"
        ref="navbarText"
      >
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ps-3">
            <Router-Link
              :class="{ 'layoutmark-pen': $route.path === '/FrontPage' }"
              class="nav-link fw-bolder text-dark fs-6"
              @click="closenavbar"
              aria-current="page"
              to="/FrontPage"
              >首頁</Router-Link
            >
          </li>
          <li class="nav-item ps-3">
            <Router-Link
              @click="closenavbar"
              class="nav-link fw-bolder text-dark fs-6"
              :class="{ 'layoutmark-pen': $route.path === '/CourseOverview' }"
              aria-current="page"
              to="/CourseOverview"
              >課程總覽</Router-Link
            >
          </li>

          <li class="nav-item ps-3">
            <Router-Link
              @click="closenavbar"
              class="nav-link fw-bolder text-dark fs-6"
              :class="{ 'layoutmark-pen': $route.path === '/Quesiton' }"
              aria-current="page"
              to="/Quesiton"
              >問與答</Router-Link
            >
          </li>
          <li class="nav-item ps-3">
            <Router-Link
              @click="chagepage(4)"
              class="nav-link fw-bolder text-dark fs-6 position-relative"
              aria-current="page"
              to="/Cartview"
            >
              <img
                src="../.././src/assets/image/Header/shopping_cart.svg"
                style="width: 25px; height: 25px"
                alt="購物車icon"
                class="position-relative"
              />
              <span
                class="position-absolute top-25 start-75 translate-middle badge rounded-pill"
                style="background: #ffffff; color: #ff8080"
              >
                {{ getnum }}
                <span class="visually-hidden">items</span>
              </span>
            </Router-Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <RouterView></RouterView>
  <div class="bg-primary">
    <div
      class="container d-flex flex-column flex-md-row align-items-center justify-content-md-center pt-5"
    >
      <div class="pe-md-5 pb-4 pb-md-0">
        <img src="../assets/image/header/Logo.svg" alt="" />
      </div>
      <div>
        <a href="https://line.me/ti/p/2W3g70s3MG" target="_blank">
          <img
            class="me-3"
            src="../assets/image/footer/icon_line.svg"
            width="33px"
            height="33px"
            alt=""
        /></a>
        <a href="https://www.google.com.tw/" target="_blank">
          <img
            class="me-3"
            src="../assets/image/footer/icon_mail.svg"
            width="33px"
            height="33px"
            alt=""
        /></a>
        <a href="https://www.facebook.com/" target="_blank">
          <img
            class="me-3"
            src="../assets/image/footer/icon_facebook.svg"
            width="33px"
            height="33px"
            alt=""
          />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <img
            src="../assets/image/footer/icon_instagram.svg"
            width="33px"
            height="33px"
            alt=""
          />
        </a>
      </div>
    </div>
    <div class="mt-6 mt-md-5 text-center pb-4 pb-md-2">
      <p class="mb-0">
        僅作練習使用，無任何商業用途 |
        <Router-Link
          class="nav-link text-dark fs-6 d-inline"
          aria-current="page"
          to="login"
          >登入後台</Router-Link
        >
      </p>
      <p>Copyright © 2023 大圍棋教室</p>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "pinia";
import { cartstore } from "../../src/stores/cart";
import { RouterView, RouterLink } from "vue-router";
import Tab from "bootstrap/js/dist/tab";

// import Loading from "vue-loading-overlay";
// import "vue-loading-overlay/dist/css/index.css";
export default {
  components: {
    RouterView,
    RouterLink,
    // Loading,
  },
  data() {
    return {
      fullPage: true,
      isLoading: false,
      nowPgae: null,
      ishide: false,
    };
  },
  computed: {
    ...mapState(cartstore, ["getnum"]),
  },
  methods: {
    ...mapActions(cartstore, ["getitem"]),

    chagepage(page) {
      this.nowPgae = page;
      this.closenavbar();
    },
    gotoLine() {
      window.open("https://line.me/ti/p/2W3g70s3MG");
    },
    closenavbar() {
      this.ishide = !this.ishide;
    },
  },
  mounted() {
    console.log(this.$refs.navbar);
    this.navbar = new Tab(this.$refs.navbar);
    this.getitem();
  },
};
</script>

<style>
.layoutmark-pen {
  padding-left: 0.5rem;
  padding-bottom: 0px;
  background-image: linear-gradient(transparent 78%, #ffb7b7 50%);
}

@media (max-width: 768px) {
  .layoutmark-pen {
    padding-left: 0px;
    padding-bottom: 0.5rem;
    background: none;
  }
}
</style>
