import axios from "axios";
import { getCookie } from "@/api/Cookies";

axios.defaults.withCredentials = true;

const CertApi = axios.create({
  // baseURL: "http://memorybox-cert:8080",
  baseURL: "http://memorybox-ikujo-back.165.192.105.60.nip.io/certification/",
  // baseURL: "http://localhost:8080/",
  headers: {
    "Content-Type": "application/json",
  },
});

CertApi.interceptors.request.use(
  (config) => {
    let userId = getCookie("memorybox-user-id");
    if (userId) {
      config.headers["User-Id"] = userId;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default CertApi;
