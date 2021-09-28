<template>
  <select placeholder="Select a category" v-model="selected" class="select">
    <option v-for="n in 10" :key="n" :value="n">JOKES</option>
  </select>
</template>

<script>
export default {
  props: {
    categories: {
      required: true,
    },
  },
  data() {
    return {
      selected: false,
    };
  },
  watch: {
    selected(value) {
      this.$emit("select", value);
    },
  },
};
</script>

<style lang="scss" scoped>
.select {
  width: 100%;
  padding: 12px;
  outline: none;
  border-width: 2px;
  border-style: solid;
  border-radius: 4px;
  border-color: $toupe;
}
</style>
