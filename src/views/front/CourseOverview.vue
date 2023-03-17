<template>
  <loading v-model:active="isLoading" :can-cancel="false">
    <div class="loadingio-spinner-dual-ball-laqyobj2qgl">
      <div class="ldio-sh19xg6jfo">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </loading>
  <div
    class="text-center overflow-auto text-nowrap pt-5"
    style="background-color: #f6f6f6"
  >
    <button
      @click="selectedTag = ''"
      type="button"
      :class="{ isActive: selectedTag == '', notActive: selectedTag != '' }"
      style="width: 128px; height: 51px; padding: 12px 30px"
      class="me-3 rounded-pill text-dark"
    >
      所有課程
    </button>
    <button
      @click="selectedTag = 'tag1'"
      :class="{
        isActive: selectedTag == 'tag1',
        notActive: selectedTag != 'tag1',
      }"
      type="button"
      style="width: 128px; height: 51px; padding: 12px 30px"
      class="me-3 rounded-pill text-dark"
    >
      免費課程
    </button>
    <button
      @click="selectedTag = 'tag2'"
      :class="{
        isActive: selectedTag == 'tag2',
        notActive: selectedTag != 'tag2',
      }"
      type="button"
      style="width: 128px; height: 51px; padding: 12px 30px"
      class="me-3 rounded-pill text-dark"
    >
      啟蒙課程
    </button>
    <button
      @click="selectedTag = 'tag3'"
      :class="{
        isActive: selectedTag == 'tag3',
        notActive: selectedTag != 'tag3',
      }"
      type="button"
      style="width: 128px; height: 51px; padding: 12px 30px"
      class="me-3 rounded-pill text-dark"
    >
      中級課程
    </button>
    <button
      @click="selectedTag = 'tag4'"
      :class="{
        isActive: selectedTag == 'tag4',
        notActive: selectedTag != 'tag4',
      }"
      type="button"
      style="width: 128px; height: 51px; padding: 12px 30px"
      class="me-3 rounded-pill text-dark"
    >
      高級課程
    </button>
    <button
      @click="selectedTag = 'tag5'"
      :class="{
        isActive: selectedTag == 'tag5',
        notActive: selectedTag != 'tag5',
      }"
      type="button"
      style="width: 128px; height: 51px; padding: 12px 30px"
      class="me-3 rounded-pill text-dark"
    >
      段位課程
    </button>
  </div>
  <div class="pb-5" style="background-color: #f6f6f6"></div>
  <div v-if="showTag('tag1')" style="background-color: #f6f6f6">
    <div style="background-color: white" class="py-5 course-radius">
      <p class="h2 mb-4 text-center">免費課程</p>
      <div class="px-md-5 card-padding d-flex justify-content-center">
        <div
          class="d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center"
          style="max-width: 1024px; width: 100%"
        >
          <CardComponent
            :data="item"
            :color="'0'"
            v-for="item in course[0]"
            :key="item.id"
          ></CardComponent>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showTag('tag2')" style="background-color: white">
    <div style="background-color: #f6f6f6" class="py-5 course-radius">
      <p class="h2 mb-4 text-center">啟蒙班</p>
      <div class="px-md-5 card-padding d-flex justify-content-center">
        <div
          class="d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center"
          style="max-width: 1024px; width: 100%"
        >
          <CardComponent
            :data="item"
            :color="'1'"
            v-for="item in course[1]"
            :key="item.id"
          ></CardComponent>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showTag('tag3')" style="background-color: #f6f6f6">
    <div style="background-color: white" class="py-5 course-radius">
      <p class="h2 mb-4 text-center">中級班</p>
      <div class="px-md-5 card-padding d-flex justify-content-center">
        <div
          class="d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center"
          style="max-width: 1024px; width: 100%"
        >
          <CardComponent
            :color="'0'"
            :data="item"
            v-for="item in course[2]"
            :key="item.id"
          ></CardComponent>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showTag('tag4')" style="background-color: white">
    <div style="background-color: #f6f6f6" class="py-5 course-radius">
      <p class="h2 mb-4 text-center">高級班</p>
      <div class="px-md-5 card-padding d-flex justify-content-center">
        <div
          class="d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center"
          style="max-width: 1024px; width: 100%"
        >
          <CardComponent
            :data="item"
            :color="'1'"
            v-for="item in course[3]"
            :key="item.id"
          ></CardComponent>
        </div>
      </div>
    </div>
  </div>
  <div v-if="showTag('tag5')" style="background-color: #f6f6f6">
    <div style="background-color: white" class="py-5 course-radius">
      <p class="h2 mb-4 text-center">段位班</p>
      <div class="px-md-5 card-padding d-flex justify-content-center">
        <div
          class="d-flex flex-column flex-md-row flex-wrap justify-content-start align-items-center"
          style="max-width: 1024px; width: 100%"
        >
          <CardComponent
            :data="item"
            :color="'0'"
            v-for="item in course[4]"
            :key="item.id"
          ></CardComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/css/index.css";
import CardComponent from "../../components/front/CardComponent.vue";
export default {
  components: {
    CardComponent,
    Loading,
  },
  data() {
    return {
      isLoading: false,
      course: [[], [], [], [], []],
      selectedTag: "",
    };
  },
  methods: {
    getCourse() {
      this.isLoading = true;
      const url = `${import.meta.env.VITE_API}api/${
        import.meta.env.VITE_APIPATH
      }/products/all`;
      this.$http
        .get(url)
        .then((res) => {
          const data = res.data.products;
          data.forEach((element) => {
            if (element.category == "免費課程") {
              this.course[0].push(element);
            } else if (element.category == "啟蒙班") {
              this.course[1].push(element);
            } else if (element.category == "中級班") {
              this.course[2].push(element);
            } else if (element.category == "高級班") {
              this.course[3].push(element);
            } else if (element.category == "段位班") {
              this.course[4].push(element);
            }
            this.isLoading = false;
          });
        })
        .catch((error) => {
          console.log(error);
        });
    },
    showTag(tag) {
      return this.selectedTag === "" || this.selectedTag === tag;
    },
  },
  mounted() {
    this.getCourse();
  },
};
</script>
<style>
.course-radius {
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.25);
  border-radius: 104px 104px 0px 0px;
}
.notActive {
  background: white;
}
.notActive:hover {
  background: #ffc656;
}
.isActive {
  background: #ffc656;
}
.isActive:active,
.notActive:active {
  background: #ffc656;
}

.notActive,
.isActive {
  border: none;
}
</style>
