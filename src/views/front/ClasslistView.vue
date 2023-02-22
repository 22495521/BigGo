<template>
  <div>
    <div class="placeholder" ref="placeholder"></div>
    <div class="balloon" :class="{ floating: isFloating }"></div>
  </div>
</template>

<style>
.placeholder {
  height: 2000px;
}

.balloon {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 50px;
  height: 80px;
  background-image: url("/path/to/balloon-image.png");
  background-size: contain;
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}

.floating {
  opacity: 1;
  animation: float-up 4s forwards;
}

@keyframes float-up {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-500px);
  }
}
</style>

<script>
export default {
  data() {
    return {
      isFloating: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const placeholder = this.$refs.placeholder;
      const threshold = placeholder.offsetTop - window.innerHeight;

      if (window.scrollY > threshold && !this.isFloating) {
        this.isFloating = true;
      }
    },
  },
};
</script>
