import axios from "axios";
import { configure } from "axios-hooks";

const axiosInstance = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 30000,
});

axiosInstance.interceptors.request.use((configs) => {
  configs.url += "?api_key=35f447ec11bcf4285ca1ac84e2bc06d8";
  return configs;
});

configure({ axios: axiosInstance });
