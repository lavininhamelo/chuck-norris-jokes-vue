<template>
  <div v-if="activeCategory" class="home">
    <div class="home__select">
      <categories-select :categories="categories" @select="setJokes($event)" />
    </div>

    <div class="home__buttons">
      <template
        v-for="(category, index) in categories.slice(0, categories.length - 2)"
      >
        <base-button
          v-if="category.jokes && category.jokes.length > 6"
          class="home__button"
          :bgColor="category.color"
          :borderColor="activeCategory === category ? '#5e5e5e' : 'transparent'"
          :textColor="activeCategory === category ? '#5e5e5e' : '#fff'"
          :key="category.key"
          @click.native="setJokes(index)"
        >
          {{ category.name }} Jokes
        </base-button>
      </template>
      <base-button
        class="home__button"
        bgColor="transparent"
        borderColor="#d1bb91"
        textColor="#d1bb91"
        icon="arrow_downward"
        @click.native="setJokes(categories.length - 2)"
      >
        View all
      </base-button>
    </div>

    <div class="home__separator" />

    <div class="home__ticket">
      <ticket :color="activeCategory.color">{{ activeCategory.name }}</ticket>
    </div>

    <div class="home__cards">
      <joke-card
        v-for="joke in activeCategory.jokes.slice(0, 6 * this.page)"
        :key="joke.id"
        :joke="joke"
        @click.native="goToJoke(joke)"
      />
    </div>

    <div class="home__all">
      <base-button
        v-if="hasJokes"
        class="home__button"
        bgColor="transparent"
        borderColor="#d1bb91"
        textColor="#d1bb91"
        icon="arrow_downward"
        @click.native="page++"
      >
        View more
      </base-button>
      <base-button
        v-else
        class="home__button"
        bgColor="transparent"
        borderColor="#d1bb91"
        textColor="#d1bb91"
        icon="arrow_upward"
        @click.native="backToTop()"
      >
        Back to top!
      </base-button>
    </div>
  </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton.vue";
import Ticket from "@/components/Ticket.vue";
import JokeCard from "@/components/JokeCard.vue";
import CategoriesSelect from "../components/CategoriesSelect.vue";

export default {
  name: "Home",
  components: {
    BaseButton,
    Ticket,
    JokeCard,
    CategoriesSelect,
  },
  data() {
    return {
      activeCategory: false,
      page: 1,
    };
  },
  watch: {
    categories() {
      this.setJokes(0);
    },
  },
  methods: {
    async setJokes(index) {
      this.activeCategory = this.categories[index];
      this.page = 1;
    },
    goToJoke(joke) {
      this.$router.push({
        name: "post",
        params: {
          id: joke.id,
        },
      });
    },
    backToTop() {
      window.scrollTo(0, 0);
    },
  },
  computed: {
    hasJokes() {
      if (this.activeCategory.jokes.length <= this.page * 6) {
        return false;
      } else return true;
    },
    categories() {
      return this.$store.getters[`Joke/getJokesByCategory`];
    },
  },
  mounted() {
    this.setJokes(0);
  },
};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  width: 100%;
  height: auto;
  flex: 1;

  &__buttons {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    margin-top: 48px;
    display: none;

    //Mobile First
    @media (min-width: 768px) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }

    @media (min-width: 1200px) {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }

    @media (min-width: 1280px) {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
  }

  &__button {
    min-width: 200px;
    margin-bottom: 16px;
    margin-right: 16px;
    display: flex;
  }

  &__select {
    display: flex;
    margin: 16px 16px;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &__cards {
    display: grid;
    grid-template-columns: repeat(1, minmax(0, 1fr));
    width: 100%;
    margin-top: 48px;
    gap: 16px;

    //Mobile First
    @media (min-width: 768px) {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
  }

  &__separator {
    height: 2px;
    width: 100%;
    border: solid 1px $white-three;
    margin-top: 36px;
  }

  &__ticket {
    width: 100px;
  }

  &__all {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 32px 0px;
  }
}
</style>
