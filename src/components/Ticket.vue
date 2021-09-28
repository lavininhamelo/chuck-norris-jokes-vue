<template>
  <div class="label" :style="{ backgroundColor: color }">
    <div class="label__dot">•</div>
    <div class="label__text">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#cfb995",
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: capitalize;
  font-weight: 600;
  padding: 0px 16px 0px 10px;
  border-radius: 16px;
  vertical-align: middle;
  color: $white;
  min-width: 160px;
  line-height: 2rem;

  &__dot {
    margin: 0px 4px;
    font-size: 1.5rem;
    line-height: 2rem;
    vertical-align: middle;
  }
}
</style>
