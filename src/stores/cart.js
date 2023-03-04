import { defineStore } from "pinia";

export const useCounterStore = defineStore("cart", {
  state: () => ({
    count: 1,
  }),
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
  },
  actions: {
    updated() {},
  },
});
