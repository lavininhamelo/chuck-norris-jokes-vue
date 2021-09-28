<template>
  <button :style="style" v-bind="$attrs" class="button">
    <span class="material-icons button__icon-left">
      {{ iconLeft || "" }}
    </span>
    <slot></slot>
    <span class="material-icons button__icon">
      {{ icon || "" }}
    </span>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    iconLeft: {
      type: String,
      required: false,
    },
    bgColor: {
      type: String,
      required: false,
    },
    textColor: {
      type: String,
      required: false,
    },
    borderColor: {
      type: String,
      required: false,
    },
    padding: {
      type: [String, Boolean],
      default: "0px 16px",
    },
  },
  computed: {
    style() {
      return {
        borderColor: this.borderColor,
        color: this.textColor,
        background: this.bgColor,
        padding: this.padding,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0px;
  border-radius: 4px;
  border: none;
  font-weight: 600;
  cursor: pointer;
  text-transform: uppercase;
  border-width: 2px;
  border-style: solid;
  border-color: transparent;
  position: relative;
}

.button:hover {
  filter: brightness(0.9);
}

.button:active {
  filter: brightness(0.85);
}

.button__icon {
  margin-left: 4px;
}

.button__icon-left {
  margin-right: 4px;
}
</style>
