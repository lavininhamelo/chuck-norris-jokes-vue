<template>
  <div class="card">
    <div class="card__header">
      <span class="card__icon material-icons"> bolt </span>
      <div class="card__title">Card Title</div>
    </div>
    <div class="card__body">
      Card Text Value Card Text Value Card Text Value Card Text Value Card Text
      Value Card Text Value Card Text Value Card Text Value Card Text Value Card
      Text Value
    </div>
    <div class="card__footer">
      <base-button textColor="#cfb995" bgColor="transparent" icon="east"
        >SEE STATS</base-button
      >
    </div>
  </div>
</template>

<script>
import BaseButton from "./Base/BaseButton.vue";
export default {
  components: { BaseButton },
};
</script>

<style lang="scss" scoped>
.card {
  padding: 16px;
  border-radius: 2px;
  border: solid 1px $white-three;
  background-color: $white-two;
  display: flex;
  width: 100%;
  flex-direction: column;

  &__header {
    display: flex;
    align-items: center;
  }

  &__icon {
    &--new {
      color: $dodger-blue;
    }

    &--trending {
      color: $macaroni-and-cheese;
    }

    &--hall {
      color: $tomato;
    }

    &--chestnut {
      color: #000;
    }
  }

  &__title {
    font-weight: 600;
    line-height: 1.25;
    text-transform: uppercase;
  }

  &__body {
    display: flex;
    text-align: left;
    font-size: 0.8rem;
    line-height: 1.57;
    color: $black;
    padding: 8px;
    flex: 1;
  }

  &__footer {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  &:hover {
    box-shadow: 0 1px 7px 0 rgba(0, 0, 0, 0.15);
  }
}
</style>
