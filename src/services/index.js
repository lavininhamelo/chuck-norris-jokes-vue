import axios from "axios";
import JokeService from "@/services/JokeService";

axios.defaults.baseURL = "https://api.chucknorris.io/";

let jokeService = new JokeService(axios);

export default (Vue) => {
  Vue.prototype.$api = axios;
  Vue.prototype.$jokeService = jokeService;
};
