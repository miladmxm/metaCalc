import axios from "axios";
import Toast from "../components/Toast";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_META_URL;
const http = axios.create({
  headers: {
    Accept: "*",
    "Content-Type": "application/json",
  },
  params:{
    lang:location.pathname.slice(1).split("/")[0]
  }
});

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
