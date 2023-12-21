import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const token = sessionStorage.getItem("token");

  console.log("token" + token);

  if (token) config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  config.headers.Accept = "application/json";

  return config;
});

export default axiosInstance;
