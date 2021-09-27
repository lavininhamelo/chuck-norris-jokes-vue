<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__title">Got jokes? Get paid for submitting!</div>
      <div class="footer__button">
        <button-arrow :padding="false" outline> Submit joke </button-arrow>
      </div>
    </div>
  </footer>
</template>

<script>
import ButtonArrow from "../Buttons/ButtonArrow.vue";
export default {
  components: { ButtonArrow },
};
</script>

<style lang="scss" scoped>
.footer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 172px;
  background: url("~@/assets/images/footer.jpg");

  &__container {
    max-width: 1200px;
    padding: 0px 16px;
    width: 100%;
  }

  &__title {
    width: 200px;
    font-weight: 600;
    text-align: left;
    line-height: 1.25;
    color: $white;
    text-transform: uppercase;
  }

  &__button {
    margin-left: -20px;
  }
}
</style>
