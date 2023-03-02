<template>
  <div class="container">
    <div v-if="product.title" class="mx-auto" style="max-width: 1156px">
      <div class="px-4 px-md-0">
        <h2
          class="fw-bolder text-center text-md-start my-5"
          style="font-size: 40px"
        >
          {{ product.category }}
        </h2>
        <div
          class="p-5 py-lg-7 flex-md-row justify-content-md-center"
          style="
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
          "
        >
          <div class="d-flex flex-column flex-lg-row">
            <div class="rowwidth d-flex align-items-start">
              <div class="pt-lg-4">
                <img
                  :src="product.imageUrl"
                  class="img-fluid"
                  style="border-radius: 16px"
                  alt=""
                />
              </div>
            </div>
            <div class="rowwidth ps-lg-5">
              <p
                class="border-bottom border-2 border-dark text-center text-md-start py-4"
              >
                <span class="font-title fw-bold">{{ product.title }}</span
                ><br /><span class="font-content"
                  >適合：{{ product.unit }}</span
                >
              </p>
              <p class="font-content py-2">
                {{ product.description }}
              </p>
              <div
                class="p-4 p-md-1 px-md-4 text-end"
                style="background-color: #f6f6f6"
              >
                <span
                  class="fs-6 text-decoration-line-through"
                  style="color: #909090"
                  >NT$ {{ product.origin_price }}</span
                ><br />
                <span class="fs-2 fw-bolder" style="color: #6f6f6f"
                  >NT$ {{ product.price }}</span
                >
              </div>
            </div>
          </div>
          <div class="text-md-end text-center mt-5">
            <button
              type="button"
              class="rounded-pill fs-5"
              style="width: 243px; height: 61px; padding: 12px 32px"
              :class="{ btnred: color == 'red', btnyellow: color == 'yellow' }"
            >
              <i class="bi bi-cart-fill me-3 btn-icon"></i>加入購物車
            </button>
          </div>
        </div>
      </div>
      <div class="px-4 px-md-0">
        <h2
          class="fw-bolder text-center text-md-start my-5"
          style="font-size: 40px"
        >
          課程大綱
        </h2>
        <div
          class="d-flex flex-column p-5 flex-md-row justify-content-md-center"
          style="
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
          "
        >
          <div class="d-flex flex-column outline">
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第一堂:{{ product.content[0] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第二堂:{{ product.content[1] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第三堂:{{ product.content[2] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第四堂:{{ product.content[3] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第五堂:{{ product.content[4] }}
            </div>
          </div>
          <div class="d-flex flex-column outline">
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第六堂:{{ product.content[5] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第七堂:{{ product.content[6] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第八堂:{{ product.content[7] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第九堂:{{ product.content[8] }}
            </div>
            <div
              class="text-nowrap overflow-auto border p-3 fs-4 mb-2 fw-bold"
              style="
                line-height: 140%;
                border-radius: 12px;
                background: rgba(255, 231, 217, 0.6);
              "
            >
              第十堂:{{ product.content[9] }}
            </div>
          </div>
        </div>
      </div>
      <div class="px-5 px-md-0">
        <h2
          class="fw-bolder text-center text-md-start my-5"
          style="font-size: 40px"
        >
          師資
        </h2>
        <div
          class="d-flex flex-column p-5 flex-md-row justify-content-md-center p-lg-6"
          style="
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
          "
        >
          <div class="teacher-img-w text-center pe-md-2 pe-lg-4">
            <img
              src="../../assets/image/課程詳情/Section_01_avatar.png"
              class="img-fluid"
              alt=""
            />
          </div>
          <div class="teacher-w ps-md-4 pe-lg-8">
            <h2 class="font-teacher-title pt-4 pt-md-0 mt-md-4 pb-3 fw-bold">
              大頭老師
            </h2>
            <p class="font-teacher-content">
              段位：中華民國圍棋協會四段<br />
              幽默風趣的教學風格、擅長各種比喻故事，讓不管是大朋友或小朋友都能快樂學圍棋。
            </p>
          </div>
        </div>
      </div>
      <div class="mb-5 px-5 px-md-0">
        <h2
          class="fw-bolder text-center text-md-start my-5"
          style="font-size: 40px"
        >
          課程小叮嚀
        </h2>
        <div
          class="d-flex flex-column p-5 justify-content-md-center"
          style="
            box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
            border-radius: 12px;
          "
        >
          <p
            class="ps-3 pe-3 pe-md-5 py-3 bg-secondary font-conurse-talk"
            style="border-radius: 12px"
          >
            壹 : 課程皆為線上課程，需準備一台電腦或手機。
          </p>
          <p
            class="ps-3 pe-3 pe-md-5 py-3 bg-secondary font-conurse-talk"
            style="border-radius: 12px"
          >
            貳 : 喜歡實體練棋的學員可準備一組棋具。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: "",
      url: "",
      path: "",
      product: {},
      color: "red",
    };
  },
  methods: {
    getId() {
      this.id = this.$route.params.id;
    },
    getCourse() {
      const url = `${this.url}api/${this.path}/product/${this.id}`;
      this.$http
        .get(url)
        .then((res) => {
          this.product = res.data.product;
          this.isred();
        })
        .catch((err) => {
          console.log(err);
        });
    },
    isred() {
      if (this.product.category == "免費課程") {
        this.color = "yellow";
      } else if (this.product.category == "中級班") {
        this.color = "yellow";
      } else if (this.product.category == "段位班") {
        this.color = "yellow";
      } else {
        this.color = "red";
      }
    },
  },

  created() {
    this.url = import.meta.env.VITE_API;
    this.path = import.meta.env.VITE_APIPATH;
    this.getId();
    this.getCourse();
  },
  mounted() {},
};
</script>

<style>
.font-content,
.font-teacher-content {
  font-size: 15px;
}

.font-title,
.font-teacher-title {
  font-size: 24px;
}
.font-conurse-talk {
  font-size: 16px;
}

@media screen and (min-width: 768px) {
  .teacher-w {
    width: 60%;
  }
  .teacher-img-w {
    width: 35%;
  }
  .outline {
    width: 42%;
    padding: 2%;
  }
  .font-content {
    font-size: 16px;
  }
  .font-title {
    font-size: 32px;
  }
  .font-teacher-content,
  .font-teacher-title {
    font-size: 23px;
  }
  .font-conurse-talk {
    font-size: 32px;
  }
}
.img-circle {
  border-radius: 50%;
}
@media screen and (min-width: 992px) {
  .rowwidth {
    width: 50%;
  }
  .font-teacher-content,
  .font-teacher-title {
    font-size: 28px;
  }
}
.btn-icon {
  font-size: 1.5rem;
}
.btnred {
  border: none;
  background-color: #ffb7b7;
}
.btnred:hover {
  background-color: #ff8080;
}
.btnyellow {
  background-color: #ffdfd0;
}
.btnyellow:hover {
  background-color: #ffc655;
}
</style>
