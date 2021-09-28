<template>
  <div class="search-input">
    <base-input
      :value="value"
      @input="$emit('input', $event)"
      icon="search"
      placeholder="How can we make you laugh today?"
    />
    <div
      v-if="results.length > 0 && value && value.length >= 3"
      class="search-dropbox"
    >
      <ul class="search-dropbox__list">
        <li
          v-for="result in results.slice(0, 6)"
          :key="result.id"
          class="search-dropbox__item"
          @click="goToJoke(result)"
        >
          <span class="search-dropbox__icon material-icons">bolt</span>
          <p class="search-dropbox__text">{{ result.value | limit }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import BaseInput from "@/components/Base/BaseInput.vue";
export default {
  components: { BaseInput },
  props: {
    value: {
      required: true,
    },
    results: {
      required: false,
      default: () => {
        return [];
      },
    },
  },

  methods: {
    goToJoke(joke) {
      this.$emit("input");
      this.$router.push({
        name: "post",
        params: {
          id: joke.id,
          joke,
        },
      });
    },
  },
  filters: {
    limit: function (value) {
      return value.substring(0, 30) + "...";
    },
  },
};
</script>

<style lang="scss" scoped>
.search-input {
  display: flex;
  flex-direction: column;
  position: relative;
}

.search-dropbox {
  z-index: 2;
  position: absolute;
  background: white;
  border: 1px solid #bbb;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 0.9rem;
  width: 100%;
  top: 70px;

  &::before {
    height: 1rem;
    position: absolute;
    top: -7px;
    left: 20px;
    height: 11px;
    width: 11px;
    transform: rotate(45deg);
    border-top: 1px solid #bbb;
    border-left: 1px solid #bbb;
    border-radius: 1px;
    background: white;
    content: "";
  }

  &__list {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }

  &__text {
    color: rgb(109, 109, 109);
    font-weight: 300;
  }

  &__icon {
    color: blueviolet;
    margin-right: 8px;
    font-size: 1rem;
    font-weight: 300;
  }

  &__item {
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 16px 8px;
    list-style: none;

    &:not(:last-child) {
      border-bottom: 1px solid #ddd;
    }

    &--active {
      color: rgb(230, 157, 48);
      font-weight: bold;
    }
  }
}
</style>
