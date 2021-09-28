<template>
  <section v-if="joke" class="post">
    <header @click="goToStart()" class="post__header">
      <span class="post__back-button material-icons"> arrow_back_ios </span>
    </header>
    <main class="post__body">
      <article class="post__card">
        <joke-post v-if="joke" :joke="joke" />
        <footer class="post__footer">
          <div class="post__footer__buttons">
            <button-rate @click.native="likeJoke()">{{
              joke.likes
            }}</button-rate>
            <button-rate @click.native="unlikeJoke()" type="unlike">{{
              joke.unlikes
            }}</button-rate>
          </div>
          <div class="post__footer__actions">
            <arrow-buttons
              v-if="joke.index != 0"
              @click.native="goToPrevious()"
              :type="'left'"
              >prev joke</arrow-buttons
            >
            <arrow-buttons
              v-if="joke.index != jokes.length - 1"
              class="ml-4"
              @click.native="goToNext()"
              >next joke</arrow-buttons
            >
          </div>
        </footer>
      </article>
      <aside class="post__ranking">
        <ranking-card />
      </aside>
    </main>
  </section>
</template>

<script>
import ArrowButtons from "@/components/Buttons/ButtonArrow.vue";
import ButtonRate from "@/components/Buttons/ButtonRate.vue";
import JokePost from "@/components/JokePost.vue";
import RankingCard from "@/components/RankingCard.vue";
export default {
  components: { JokePost, RankingCard, ArrowButtons, ButtonRate },
  props: {
    id: {
      required: true,
    },
    jokeData: {
      required: false,
    },
  },
  data() {
    return {
      joke: this.jokeData,
    };
  },
  computed: {
    jokes() {
      return this.$store.getters["Joke/getJokesList"];
    },
  },
  watch: {
    id() {
      this.loadJoke();
    },
  },
  methods: {
    async getRandomJoke() {
      try {
        let response = await this.$jokeService.getRandomJoke();
        if (response.status === 200) {
          this.goToJoke(response.data);
        }
      } catch (err) {
        console.log(err);
      }
    },
    goToJoke(joke) {
      this.$router.push({
        name: "post",
        params: {
          id: joke.id,
          jokeData: joke,
        },
      });
    },
    async goToNext() {
      let joke = this.jokes[this.joke.index + 1];
      this.joke = joke;

      this.goToJoke(joke);
    },
    async goToPrevious() {
      let joke = this.jokes[this.joke.index - 1];
      this.joke = joke;
      this.goToJoke(joke);
    },
    async likeJoke() {
      this.joke = await this.$store.dispatch("Joke/likeJoke", this.joke);
    },

    async unlikeJoke() {
      this.joke = await this.$store.dispatch("Joke/unlikeJoke", this.joke);
    },
    goToStart() {
      this.$router.push("/");
    },
    async loadJoke() {
      let joke = await this.$store.dispatch("Joke/getJokeById", this.id);
      this.joke = joke;
    },
  },
  created() {
    if (!this.jokeData) {
      this.loadJoke();
    }
  },
};
</script>

<style lang="scss" scoped>
.post {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 568px) {
    padding: 0px 16px;
  }

  @media (min-width: 1280px) {
    padding: none;
  }

  &__header {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    margin: 16px 8px;
  }

  &__body {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
  }

  &__card {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    margin-bottom: 32px;
    min-width: 320px;
    width: 100%;
  }

  &__ranking {
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 32px;
    flex: 1;

    @media (min-width: 768px) {
      margin-left: 16px;
      flex: 0;
    }

    @media (min-width: 1024px) {
      margin-left: 32px;
      width: 350px;
      flex: 0;
    }
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    width: 100%;

    &__buttons {
      display: flex;
      margin-top: 16px;
    }

    &__actions {
      display: flex;
      align-items: center;
      justify-content: flex-end;
      flex: 1;
      margin-top: 32px;
    }
  }

  &__back-button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    padding: 0px 8px;
    width: 42px;
    height: 42px;
    background-color: $black;
    color: $toupe;
    cursor: pointer;
  }
}

.ml-4 {
  margin-left: 16px;
}
</style>
