<template>
  <div v-if="!loading" id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
    };
  },
  methods: {
    loadData() {
      this.$store.dispatch("Category/loadCategories");
      this.$store.dispatch("Joke/loadJokes");
      this.loading = false;
    },
  },
  created() {
    this.loadData();
  },
};
</script>

<style lang="scss">
#app {
  font-family: Montserrat, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
