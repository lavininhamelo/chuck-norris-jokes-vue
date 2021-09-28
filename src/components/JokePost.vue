<template>
  <div class="card">
    <div class="card__header">
      <div class="ticket">
        <ticket color="#fea934"> Adult</ticket>
      </div>
      <div class="status">
        <popularity-label :likes="23" :unlikes="12">Label</popularity-label>
      </div>
    </div>
    <div class="card__content">
      <div class="card__title">Joke</div>
      <p class="card__text">Joke Value Te Value Card Text Value Card Text</p>
    </div>
  </div>
</template>

<script>
import PopularityLabel from "./PopularityLabel.vue";
import Ticket from "./Ticket.vue";
export default {
  components: {
    Ticket,
    PopularityLabel,
  },
};
</script>

<style lang="scss" scoped>
.card {
  width: 100%;
  border: solid 1px $white-three;
  background-color: $white-two;
  padding: 16px;
  border-radius: 2px;
  text-align: left;

  &:hover {
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__title {
    font-weight: bold;
    font-size: 2rem;
    line-height: 1.5;
    text-transform: capitalize;
    color: $toupe;
    margin: 8px 0px;
  }

  &__text {
    color: $black-two;
    line-height: 1.5rem;
    font-size: 0.9rem;
    text-align: left;
  }
}
</style>
