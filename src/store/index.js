import Vue from "vue";
import Vuex from "vuex";
import Joke from "@/store/modules/JokeStore";
import Category from "@/store/modules/CategoryStore";

Vue.use(Vuex);

export default new Vuex.Store({
  namespaced: true,

  modules: {
    Joke,
    Category,
  },
});
