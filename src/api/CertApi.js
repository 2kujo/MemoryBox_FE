import axios from "axios";
import { getCookie } from "@/api/Cookies";

axios.defaults.withCredentials = true;

const CertApi = axios.create({
  // baseURL: "http://memorybox-cert:8080/",
  baseURL: "http://memorybox-ikujo-back.165.192.105.60.nip.io/certification",
  headers: {
    "Content-Type": "application/json",
  },
});

CertApi.interceptors.request.use(
  (config) => {
    const userCookie = getCookie("memorybox-user-id");
    if (userCookie) {
      config.headers["Cookie"] = userCookie;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default CertApi;
