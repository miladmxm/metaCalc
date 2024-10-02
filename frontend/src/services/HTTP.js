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

export const getMain = async () => {
  try {
    return await http.get("/api/");
  } catch (err) {
    console.log(err);
  }
};

export const signInHttp = (data) => http.post("/user/signin", data);
export const signUpHttp = (data) => http.post("/user/signup", data);
export const signOutUpHttp = () => http.delete("/user/signout");
export const getUserHttp = (signal) => axios.get("/user/", { signal });

export const getAllWeekHttp = () => http.get(`/user/weeks`);

export const getcurrentweekHttp=()=>http.get("/user/getcurrentweek");

export const saveDayes = async (body, weekId) => {
  try {
    return await axios.post(`/user/savedayes/${weekId}`, body);
  } catch (err) {
    console.log(err);
  }
};


