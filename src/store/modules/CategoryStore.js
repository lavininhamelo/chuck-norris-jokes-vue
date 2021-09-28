const state = {
  categories: [],
  colors: [
    "#ef4444",
    "#ff5b5b",
    "#ff915b",
    "#ffbe5b",
    "#ffdf5b",
    "#8fe360",
    "#57e690",
    "#34D399",
    "#14B8A6",
    "#57dbe6",
    "#38BDF8",
    "#3B82F6",
    "#6366F1",
    "#8B5CF6",
    "#A855F7",
    "#D946EF",
    "#EC4899",
    "#F43F5E",
  ],
};

const mutations = {
  SET_CATEGORIES(state, value) {
    state.categories = value;
  },
};

const getters = {
  getCategoriesList: (state) => state.categories,
  getColors: (state) => state.colors,
};

const actions = {
  async getCategories({ getters }) {
    return getters.getCategoriesList;
  },

  async loadCategories({ commit, getters }) {
    const colors = getters.getColors;

    try {
      let response = await this._vm.$jokeService.getAllCategories();
      if (response.status === 200) {
        let categories = response.data;

        let categoriesList = categories.map((category, index) => {
          return {
            name: category.toLowerCase(),
            color: colors[index],
            jokes: [],
          };
        });

        categoriesList.push({
          name: "all",
          color: "#aaa",
          jokes: [],
        });

        categoriesList.push({
          name: "uncategorized",
          color: "#000",
          jokes: [],
        });

        commit("SET_CATEGORIES", categoriesList);
      }
    } catch (error) {
      console.log(error);
    }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
