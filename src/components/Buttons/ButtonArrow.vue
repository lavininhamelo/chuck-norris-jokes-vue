<template>
  <div
    @mouseenter="hover = true"
    @mouseleave="hover = false"
    class="button-arrow"
    :class="{
      'button-arrow--outline': outline,
    }"
  >
    <span
      v-if="type === 'left'"
      :class="direction"
      class="button-arrow__icon material-icons"
    >
      west
    </span>
    <base-button :padding="false" textColor="#cfb995" bgColor="transparent">
      <slot> </slot>
    </base-button>
    <span
      v-if="type === 'right'"
      :class="direction"
      class="button-arrow__icon material-icons"
    >
      east
    </span>
  </div>
</template>

<script>
import BaseButton from "@/components/Base/BaseButton.vue";
export default {
  components: { BaseButton },
  props: {
    type: {
      type: String,
      default: "right",
    },
    outline: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    direction() {
      let direction = "";
      if (this.type !== "right") {
        direction = "button-arrow__icon--right";
      } else {
        direction = "button-arrow__icon--left";
      }

      if (this.hover) {
        direction += "-hover";
      }
      return direction;
    },
  },
};
</script>

<style lang="scss" scoped>
.button-arrow {
  display: flex;
  align-items: center;
  color: $toupe;
  height: 40px;
  padding: 10px 16px 10px 16px;
  border-radius: 2px;
  border: solid 1px $white-three;
  background-color: $white-two;

  &--outline {
    border-radius: 0px;
    border: none;
    background-color: transparent;
  }

  &__icon--left {
    padding-right: 8px;

    &-hover {
      padding-left: 8px;
      padding-right: 0px;
    }
  }

  &__icon--right {
    padding-left: 8px;

    &-hover {
      padding-left: 0px;
      padding-right: 8px;
    }
  }
}
</style>
