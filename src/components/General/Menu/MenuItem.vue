<template>
  <div
    class="menu-item"
    @mouseenter="active = true"
    @mouseleave="active = false"
    :class="{
      'menu-item--active': active,
    }"
  >
    <span v-if="icon" class="material-icons">{{ icon }}</span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-item {
  color: $white-two;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 24px;
  width: auto;
  height: 60px;
  min-height: 60px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 600;
}

.menu-item--active {
  background-color: $toupe;
}
</style>
