<template>
  <div
    class="input"
    :class="{
      'input--focus': focus,
    }"
  >
    <input
      class="input__element"
      v-bind="$attrs"
      type="text"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @focus="focus = true"
      @blur="focus = false"
    />
    <span v-if="icon" class="material-icons">{{ icon }}</span>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
    value: {
      required: false,
    },
  },
  data() {
    return {
      focus: true,
    };
  },
};
</script>

<style lang="scss" scoped>
.input {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background: transparent;
  height: 48px;
  width: 100%;
  border-radius: 4px;
  border: 1px solid $white-two;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
  color: $greyish;
}

.input__element {
  &::placeholder {
    color: $greyish;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: $greyish;
  }

  &::-ms-input-placeholder {
    color: $greyish;
  }
}

.input--focus {
  background: $white;
  border: 1px solid #aaa;
  color: $black;
}

.input__element {
  flex: 1;
  color: $white;

  &:focus {
    color: $black;
  }
}
</style>
