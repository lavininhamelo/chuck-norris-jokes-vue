export default class JokeService {
  constructor(axios) {
    this.axios = axios;
  }

  async getAllJokes() {
    let url = "jokes/search";
    let query = "chuck";
    let params = { query };
    return await this.axios.get(url, { params });
  }

  async getAllCategories() {
    return await this.axios.get("jokes/categories");
  }

  async getJokeByCategory(category) {
    let url = "jokes/random";
    let params = {
      category,
    };
    return await this.axios.get(url, { params });
  }

  async searchJokeByTerm(query) {
    let url = "jokes/search";
    let params = { query };
    return await this.axios.get(url, { params });
  }

  async getRandomJoke() {
    return await this.axios.get("/jokes/random");
  }
}
