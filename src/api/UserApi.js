import axios from "axios";
import { getCookie } from "@/api/Cookies";

axios.defaults.withCredentials = true;

const UserApi = axios.create({
  // baseURL: "http://memorybox-main:8080/",
  baseURL: "http://memorybox-ikujo-back.165.192.105.60.nip.io/main",
  headers: {
    "Content-Type": "application/json",
  },
});

UserApi.interceptors.request.use(
  (config) => {
    const userId = getCookie("memorybox-user-id");
    if (userId) {
      config.headers["Cookie"] = userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default UserApi;
