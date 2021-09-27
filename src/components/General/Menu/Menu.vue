<template>
  <div class="menu">
    <div class="menu__container">
      <router-link to="/">
        <img src="@/assets/logo.svg" class="menu__logo" />
      </router-link>
      <div class="menu__items">
        <menu-item>So funktioniert's</menu-item>
        <menu-item> Sonderangebote</menu-item>
        <menu-item-dropdown icon="person">Mein Bereich</menu-item-dropdown>
      </div>
      <span @click="menu = !menu" class="menu__burger material-icons"
        >menu</span
      >
    </div>
    <div v-if="menu" class="menu__side">
      <span @click="menu = !menu" class="menu__burger material-icons"
        >close</span
      >
      <menu-item>So funktioniert's</menu-item>
      <menu-item> Sonderangebote</menu-item>
      <menu-item-dropdown>Mein Bereich</menu-item-dropdown>
    </div>
  </div>
</template>

<script>
import MenuItem from "@/components/General/Menu/MenuItem";
import MenuItemDropdown from "@/components/General/Menu/MenuItemDropdown";
export default {
  components: {
    MenuItem,
    MenuItemDropdown,
  },
  data() {
    return {
      menu: false,
    };
  },
};
</script>

<style lang="scss" scoped>
.menu {
  height: 60px;
  background: $black;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  &__container {
    max-width: 1200px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__items {
    display: none;
    align-items: center;
    justify-content: flex-end;
    flex: 1;
    height: 100%;

    @media (min-width: 1024px) {
      display: flex;
    }
  }

  &__burger {
    padding: 16px 16px;
    color: $white;
    cursor: pointer;

    @media (min-width: 1024px) {
      display: none;
    }
  }

  &__side {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    widows: 320px;
    background: $black;
    height: 100vh;
    top: 0;
    z-index: 2;
    right: 0;
  }

  &__logo {
    padding: 0px 16px;
  }
}
</style>
