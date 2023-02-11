import axios from "axios";

const instanceAxios = axios.create({
  baseURL: import.meta.env.API_URL,
});

export { instanceAxios };
