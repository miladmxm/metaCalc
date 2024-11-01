import axios from "axios";
import Toast from "../components/Toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_META_URL;

const http = axios.create({
  headers: {
    Accept: "*",
    "Content-Type": "application/json",
  },
});

function axiosRequestConfig(config) {
  config.params = { lang: location.pathname.slice(1).split("/")[0] };
  return config;
}

http.interceptors.request.use(axiosRequestConfig);
axios.interceptors.request.use(axiosRequestConfig);

function axiosResponse(res) {
  return res.data;
}

axios.interceptors.response.use(axiosResponse);
http.interceptors.response.use(axiosResponse, function (error) {
  if (error) {
    Toast(error.response.data.message, "error");
    throw error;
  }
});

export const getIndexesHttp = () => http.get("/api/indexes");

export const signInHttp = (data) => http.post("/user/signin", data);
export const signUpHttp = (data) => http.post("/user/signup", data);
export const signOutUpHttp = () => http.delete("/user/signout");
export const getUserHttp = (signal) => axios.get("/user/", { signal });

export const getAllWeekHttp = (signal) => http.get(`/user/weeks`, { signal });

export const getcurrentweekHttp = (signal) =>
  http.get("/user/getcurrentweek", { signal });

export const getWeekByIdHttp = (weekId,signal) => http.get(`/user/weeks/${weekId}`,{signal});
export const updateWeekByIdHttp = (data, weekId) =>
  http.put(`/user/weeks/${weekId}`, data);

export const getWeekIsExistHttp = (date,signal) => http.get(`/user/weeks/isexist/${date}`,{signal});
export const addLastWeekHttp = (date,data) => http.post(`/user/weeks/${date}`,data);