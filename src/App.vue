<template>
  <div v-if="!loading" id="app">
    <router-view />
  </div>
  <div class="loading" v-else>
    <img src="@/assets/images/loading.gif" width="100" />
    <h1>Loading...</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    loadData() {
      this.$store.dispatch("Category/loadCategories");
      this.$store.dispatch("Joke/loadJokes");
    },
  },
  computed: {
    loading() {
      return this.$store.getters["Joke/loading"];
    },
  },
  created() {
    this.loadData();
  },
  mounted() {
    console.log(this.loading);
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

.loading {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  font-size: 1.5rem;
  width: 100%;
  height: 100vh;
  background-color: $white;
  font-weight: bold;
  color: $toupe;

  h1 {
    margin-top: 1rem;
  }
}
</style>
