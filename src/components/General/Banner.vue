<template>
  <div class="banner">
    <h1 class="banner__title">The Joke Bible</h1>
    <h2 class="banner__subtitle">Daily Laughs for you and yours</h2>
    <search-input v-model="search" :results="results" class="banner__input" />
  </div>
</template>

<script>
import SearchInput from "@/components/SearchInput.vue";
export default {
  components: { SearchInput },
  data() {
    return {
      search: "",
      results: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url("~@/assets/images/header.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 320px;

  &__title {
    line-height: 1.5;
    color: $toupe;
    font-size: 2rem;
    @media (min-width: 768px) {
      font-size: 3rem;
    }
  }

  &__subtitle {
    line-height: 1.45;
    font-weight: 600;
    color: $white-two;
    font-size: 1.2rem;

    @media (min-width: 768px) {
      font-size: 1.5rem;
    }
  }

  &__input {
    margin-top: 48px;
    max-width: 458px;
    min-width: 300px;
  }
}
</style>
