<template>
  <div class="rate">
    <button
      :class="type !== 'like' ? 'btn-review--unlike' : 'btn-review--like'"
      class="btn-review"
    >
      <span class="material-icons">
        {{ icon }}
      </span>
    </button>
    <div
      class="rate__value"
      :class="type !== 'like' ? 'rate__value--unlike' : 'rate__value--like'"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: "like",
    },
  },
  computed: {
    icon() {
      return this.type !== "like" ? "thumb_down_off_alt" : "thumb_up_off_alt";
    },
  },
};
</script>

<style lang="scss" scoped>
.rate {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 16px;

  &__value {
    font-size: 0.8rem;
    font-weight: 600;
    text-align: center;
    margin-top: 8px;

    &--like {
      color: $tea;
    }

    &--unlike {
      color: $lightish-red;
    }
  }
}

.btn-review {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;
  background-color: black;
  padding: 10px 8px 8px;
  cursor: pointer;
  border: none;

  &--like {
    background-color: $tea;
  }

  &--unlike {
    background-color: $lightish-red;
  }

  &:hover {
    filter: brightness(0.85);
  }
}
</style>
