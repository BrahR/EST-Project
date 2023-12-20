import axios from "axios";
import { useAtom } from "jotai";
import { tokenAtom } from "@/atoms/token";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_APP_URL}/api`,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use((config) => {
  const [token, setToken] = useAtom(tokenAtom);

  if (token) config.headers.Authorization = `Bearer ${token}`;
  config.headers.Accept = "application/json";

  return config;
});

export default axiosInstance;
