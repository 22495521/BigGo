<template>
  <nav class="navbar navbar-expand-md navbar-light bg-primary">
    <div class="container-fluid">
      <Router-Link
        class="nav-link fw-bolder text-dark fs-6"
        aria-current="page"
        to="/FrontPage"
      >
        <img
          src="../../assets/image/Header/Logo.svg"
          alt=""
          width="226"
          height="41"
          class="d-inline-block align-text-top"
      /></Router-Link>
    </div>
  </nav>
  <div
    class="d-flex justify-content-center"
    style="width: 100%; padding: 142px 50px 142px 50px"
  >
    <div
      class="bg-secondary"
      style="
        width: 733px;
        hight: 485px;
        padding: 91px 130px 91px 130px;
        border-radius: 20px;
        box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
      "
    >
      <form class="text-center">
        <div style="margin-bottom: 40px">
          <img
            src="../../assets/image/Header/Logo.svg"
            style="width: 276px; height: 50px"
            alt=""
          />
        </div>
        <div class="form-floating" style="margin-bottom: 20px">
          <input
            type="email"
            class="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            required
            autofocus
            v-model="userType.username"
          />
          <label for="floatingInput">Email</label>
        </div>
        <div class="form-floating" style="margin-bottom: 40px">
          <input
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            required
            v-model="userType.password"
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button
          type="button"
          class="btn btn-success rounded-pill"
          style="height: 51px; width: 195px; font-size: 20px; font-weight: 500"
          @click.prevent="login"
        >
          Sign In
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: {
    RouterLink,
  },
  data() {
    return {
      userType: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      const url = `${import.meta.env.VITE_API}/admin/signin`;
      this.$http
        .post(url, this.userType)
        .then((res) => {
          const { token, expired } = res.data;
          document.cookie = `bigtoken=${token}; expired=${expired}`;
          this.$router.push({ path: "/admin/course" });
        })
        .catch((error) => {
          console.log(error);
          alert("帳號密碼錯誤");
        });
    },
  },
};
</script>
