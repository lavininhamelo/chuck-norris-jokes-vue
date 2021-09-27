<template>
  <section class="layout">
    <Header />
    <main class="layout__page">
      <router-view></router-view>
    </main>
    <Footer />
  </section>
</template>

<script>
import Footer from "@/components/General/Footer.vue";
import Header from "@/components/General/Header.vue";

export default {
  components: {
    Footer,
    Header,
  },
};
</script>
<style lang="scss" scoped>
.layout {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__page {
    background: $white;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    flex: 1;
  }
}
</style>
