<template>
  <div class="card">
    <div class="card__title">THE TOP 10 JOKES THIS WEEK</div>
    <div class="card__body">
      <a v-for="joke in jokes.slice(0, 9)" :key="joke.id" class="card__link">{{
        `${joke.categories[0] || "Uncategorized"} Joke ${joke.index}`
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    jokes() {
      return this.$store.getters["Joke/getJokesList"];
    },
  },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 16px 32px;
  border-radius: 2px;
  border: solid 1px $white-three;
  background-color: $white-two;
  display: flex;
  width: 100%;
  flex-direction: column;

  &__title {
    font-weight: 600;
    line-height: 1.25;
    text-transform: uppercase;
    margin-bottom: 16px;
  }

  &__body {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 0.9rem;
    line-height: 1.57;
    color: $black;
  }

  &__link {
    margin-top: 8px;
    line-height: 1.47;
    text-transform: capitalize;
    text-decoration: underline;
    color: $black-two;
    cursor: pointer;

    &:hover {
      font-weight: 600;
      filter: brightness(0.7);
    }
  }

  &:hover {
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  }
}
</style>
