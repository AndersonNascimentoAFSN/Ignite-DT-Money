import axios from "axios";

const instanceAxios = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export { instanceAxios };
