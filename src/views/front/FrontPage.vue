<template>
  <Banner-View></Banner-View>
  <ThinkingView></ThinkingView>
  <GoodratingView></GoodratingView>
  <Ability-Component></Ability-Component>
  <Hotclass-Component></Hotclass-Component>
</template>
<script>
import BannerView from "../../components/front/BannerView.vue";
import ThinkingView from "../../components/front/ThinkingView.vue";
import GoodratingView from "../../components/front/ GoodratingView.vue";
import AbilityComponent from "../../components/front/AbilityComponent.vue";
import HotclassComponent from "../../components/front/HotclassComponent.vue";
export default {
  components: {
    BannerView,
    ThinkingView,
    GoodratingView,
    AbilityComponent,
    HotclassComponent,
  },
};
</script>
