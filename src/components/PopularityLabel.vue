<template>
  <div class="label" :class="color">
    <div class="label__dot">•</div>
    <div class="label__text">
      {{ label }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    likes: {
      required: true,
    },
    unlikes: {
      required: true,
    },
  },
  computed: {
    label() {
      if (this.unlikes > this.likes) {
        return "Chestnut";
      } else if (this.likes >= 51 && this.likes < 100) {
        return "Trending";
      } else if (this.likes >= 101) {
        return "Hall of fame";
      } else {
        return "New in town";
      }
    },
    color() {
      const { likes, unlikes } = this;
      if (unlikes > likes) {
        return "label--chestnut";
      } else if (likes >= 51 && likes <= 100) {
        return "label--trending";
      } else if (likes >= 101) {
        return "label--hall";
      } else {
        return "label--new";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  font-weight: 600;
  line-height: 2rem;

  &--new {
    color: $dodger-blue;
  }

  &--trending {
    color: $macaroni-and-cheese;
  }

  &--hall {
    color: $tomato;
  }

  &--chestnut {
    color: #000;
  }

  &__dot {
    margin: 0px 4px;
    font-size: 1.5rem;
    line-height: 2rem;
    vertical-align: middle;
  }
}
</style>
