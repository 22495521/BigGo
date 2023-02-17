<template>
  <Banner-View></Banner-View>
  <ThinkingView></ThinkingView>
  <GoodratingView></GoodratingView>
  <Ability-Component></Ability-Component>
</template>
<script>
import BannerView from "../../components/front/BannerView.vue";
import ThinkingView from "../../components/front/ThinkingView.vue";
import GoodratingView from "../../components/front/ GoodratingView.vue";
import AbilityComponent from "../../components/front/AbilityComponent.vue";
export default {
  components: {
    BannerView,
    ThinkingView,
    GoodratingView,
    AbilityComponent,
  },
};
</script>
