<template>
  <div
    class="menu-dropdown"
    @mouseenter="isOpen = true"
    @mouseleave="isOpen = false"
  >
    <menu-item v-bind="$attrs" class="menu-dropdown__item">
      <slot></slot>
      <span class="material-icons menu-dropdown__icon"> arrow_drop_down </span>
    </menu-item>

    <div class="menu-dropdown__container" @mouseenter="isOpen = true">
      <nav v-if="isOpen" class="menu-dropdown__nav">
        <ul class="menu-dropdown__list">
          <li class="menu-dropdown__list__item">My published jokes</li>
          <li class="menu-dropdown__list__item">My saved jokes</li>
          <li class="menu-dropdown__list__item">Account Information</li>
          <li class="menu-dropdown__list__item">Publish new joke</li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/General/Menu/MenuItem";
export default {
  components: {
    MenuItem,
  },
  data() {
    return {
      isOpen: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu-dropdown {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  height: 60px;
  width: auto;

  &__item {
    width: 100%;
  }

  &__icon {
    margin-left: 8px;
  }

  &__nav {
    z-index: 1;
    position: relative;
    background: white;
    border: 1px solid #bbb;
    border-radius: 4px;
    padding: 4px 8px;
    width: 100%;
    top: 10px;
  }

  &__nav::before {
    height: 1rem;
    position: absolute;
    top: -7px;
    right: 24px;
    height: 11px;
    width: 11px;
    transform: rotate(45deg);
    border-top: 2px solid #bbb;
    border-left: 2px solid #bbb;
    border-radius: 1px;
    background: white;
    content: "";
  }

  &__list {
    display: flex;
    flex-direction: column;
    border-radius: 4px;
  }

  &__list__item {
    cursor: pointer;
    color: $brownish-grey;
    font-size: 0.85rem;
    text-align: left;
    padding: 10px 32px 10px 4px;
    list-style: none;

    &:hover {
      color: $toupe;
      font-weight: 600;
    }
  }

  &__list__item:not(:last-child) {
    border-bottom: 2px solid #ddd;
  }
}
</style>
