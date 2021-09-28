const state = {
  jokes: [],
  jokesByCategory: [],
  loading: true,
};

const mutations = {
  UPDATE_JOKES_LIST(state, value) {
    state.jokes = value;
  },
  SET_JOKES_BY_CATEGORY(state, value) {
    state.jokesByCategory = value;
  },
  SET_LOADING(state, value) {
    state.loading = value;
  },
  CHANGE_JOKE_BY_INDEX(state, { index, joke }) {
    state.jokes[index] = joke;
  },
};

const getters = {
  getJokesList: (state) => state.jokes,
  getJokesByCategory: (state) => state.jokesByCategory,
  loading: (state) => state.loading,
};

const actions = {
  async loadJokes({ commit, dispatch }) {
    try {
      let response = await this._vm.$jokeService.getAllJokes();
      if (response.status === 200) {
        commit("UPDATE_JOKES_LIST", response.data.result);
        dispatch("mapJokesToCategory");
      }
    } catch (error) {
      console.log(error);
    }
  },

  async getJokeById({ getters }, id) {
    const jokes = await getters.getJokesList;

    let index = await jokes.findIndex((joke) => joke.id === id);

    if (index >= 0) {
      const joke = jokes[index];
      return {
        index,
        ...joke,
      };
    } else return false;
  },

  async getNextJoke({ getters }, joke) {
    const jokes = await getters.getJokesList;
    let index = joke.index;
    return jokes[index + 1];
  },

  async getPreviousJoke({ getters }, joke) {
    const jokes = await getters.getJokesList;
    let index = joke.index;
    return jokes[index - 1];
  },

  async likeJoke({ commit }, joke) {
    joke.likes++;
    await commit("CHANGE_JOKE_BY_INDEX", {
      index: joke.index,
      joke: joke.value,
    });
    return joke;
  },

  async unlikeJoke({ commit }, joke) {
    joke.unlikes++;
    await commit("CHANGE_JOKE_BY_INDEX", {
      index: joke.index,
      joke: joke.value,
    });
    return joke;
  },

  async mapJokesToCategory({ commit, getters, dispatch }) {
    let jokes = getters.getJokesList;
    let categories = await dispatch("Category/getCategories", null, {
      root: true,
    });
    let indexes = [];

    for (let i = 0; i < jokes.length; i++) {
      let joke = jokes[i];
      for (let categoryJoke of jokes[i].categories) {
        let index = categories.findIndex(
          (category) => category.name === categoryJoke.toLowerCase()
        );
        if (index >= 0) {
          indexes.push(index);
        }
      }

      joke.index = i;
      joke.liked = false;
      joke.likes = Math.floor(Math.random() * 120) + 1;
      joke.unlikes = Math.floor(Math.random() * 30) + 1;

      indexes.forEach((index) => {
        categories[index].jokes.push(joke);
      });

      if (joke.categories.length === 0) {
        categories[categories.length - 1].jokes.push(joke);
      }

      categories[categories.length - 2].jokes.push(joke);

      indexes = [];
    }

    commit("UPDATE_JOKES_LIST", jokes);
    commit("SET_JOKES_BY_CATEGORY", categories);
    commit("SET_LOADING", false);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
