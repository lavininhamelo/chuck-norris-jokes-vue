<template>
  <div class="home">
    <div class="home__select">
      <categories-select />
    </div>
    <div class="home__buttons">
      <template v-for="category in 6">
        <base-button
          class="home__button"
          bgColor="#ff9fe3"
          :borderColor="activeCategory === category ? '#5e5e5e' : 'transparent'"
          :textColor="activeCategory === category ? '#5e5e5e' : '#fff'"
          :key="category"
        >
          {{ category }} Jokes
        </base-button>
      </template>

      <base-button
        class="home__button"
        bgColor="transparent"
        borderColor="#d1bb91"
        textColor="#d1bb91"
        icon="arrow_downward"
      >
        View all
      </base-button>
    </div>

    <div class="home__separator" />

    <div class="home__ticket">
      <ticket color="#FF99ff">Ticket</ticket>
    </div>

    <div class="home__cards">
      <joke-card :key="joke" v-for="joke in 6" />
    </div>

    <div class="home__all">
      <base-button
        class="home__button"
        bgColor="transparent"
        borderColor="#d1bb91"
        textColor="#d1bb91"
        icon="arrow_downward"
      >
        View more
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
    display: block;
    margin: 16px 16px;

    @media (min-width: 768x) {
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
