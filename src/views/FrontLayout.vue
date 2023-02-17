<template>
  <nav
    class="navbar navbar-expand-md navbar-light bg-primary px-2 overflow-hidden"
  >
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/image/header/Logo.svg"
          alt=""
          width="226"
          height="41"
          class="d-inline-block align-text-top"
        />
      </a>
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
      <div class="collapse navbar-collapse" id="navbarText" ref="navbarText">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ps-3">
            <Router-Link
              class="nav-link fw-bolder text-dark fs-6"
              aria-current="page"
              to="/FrontPage"
              >首頁</Router-Link
            >
          </li>
          <li class="nav-item ps-3">
            <a class="nav-link fw-normal text-dark fs-6 fw-bolder" href="#"
              >課程總覽</a
            >
          </li>
          <li class="nav-item ps-3">
            <a class="nav-link fw-normal text-dark fs-6 fw-bolder" href="#"
              >問與答</a
            >
          </li>
          <li class="nav-item ps-3">
            <a href="#">
              <img
                class="mt-2"
                src="../assets/image/header/shopping_cart.svg"
                width="25px"
                height="25px"
                alt=""
              />
            </a>
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
        <a href="#">
          <img
            class="me-3"
            src="../assets/image/footer/icon_line.svg"
            width="33px"
            height="33px"
            alt=""
        /></a>
        <a href="#">
          <img
            class="me-3"
            src="../assets/image/footer/icon_mail.svg"
            width="33px"
            height="33px"
            alt=""
        /></a>
        <a href="#">
          <img
            class="me-3"
            src="../assets/image/footer/icon_facebook.svg"
            width="33px"
            height="33px"
            alt=""
          />
        </a>
        <a href="#">
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
        僅作練習使用，無任何商業用途 |<a
          href="#"
          class="link-dark text-decoration-none"
          style=""
          >後台登入</a
        >
      </p>
      <p>Copyright © 2023 大圍棋教室</p>
    </div>
  </div>
</template>
<script>
import { RouterView, RouterLink } from "vue-router";
export default {
  components: {
    RouterView,
    RouterLink,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@700&family=Noto+Sans:wght@100;700&display=swap");

.noto-sens {
  font-family: "Noto Sans", sans-serif;
}
</style>
