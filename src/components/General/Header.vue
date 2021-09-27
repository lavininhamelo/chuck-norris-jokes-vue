<template>
  <div class="header">
    <Menu />
    <Banner />
  </div>
</template>

<script>
import Menu from "@/components/General/Menu/Menu";
import Banner from "@/components/General/Banner.vue";
export default {
  components: {
    Menu,
    Banner,
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
}
</style>
