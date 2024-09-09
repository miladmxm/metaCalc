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

function axiosRequestConfig (config){
   config.params = { lang: location.pathname.slice(1).split("/")[0] }
   return config
} 

http.interceptors.request.use(axiosRequestConfig)
axios.interceptors.request.use(axiosRequestConfig)

function axiosResponse(res) {
  return res.data;
}

axios.interceptors.response.use(axiosResponse);
http.interceptors.response.use(axiosResponse, function (error) {
  if (error) {
    Toast(error.response.data.message, "error");
  }
});

export const getMain = async () => {
  try {
    return await http.get("/api/");
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (body) => {
  try {
    return await http.post("/user/register", body);
  } catch (err) {
    console.log(err);
  }
};
export const loginUser = async (body) => {
  try {
    return await http.post("/user/login", body);
  } catch (err) {
    console.log(err);
  }
};
export const logoutUser = async () => {
  try {
    return await http.get("/user/logout");
  } catch (err) {
    console.log(err);
  }
};

export const initUser = async () => {
  try {
    return await axios.get("/user/");
  } catch (err) {
    console.log(err);
  }
};
export const getcurrentweek = async () => {
  try {
    return await axios.get("/user/getcurrentweek/");
  } catch (err) {
    console.log(err);
  }
};

export const saveDayes = async (body, weekId) => {
  try {
    return await axios.post(`/user/savedayes/${weekId}`, body);
  } catch (err) {
    console.log(err);
  }
};

export const getAllWeek = async () => {
  try {
    return await axios.get(`/user/weeks/`);
  } catch (err) {
    console.log(err);
  }
};
