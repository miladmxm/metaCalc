import axios from "axios";

const http = axios.create({
  baseURL: import.meta.env.VITE_API_META_URL,
  headers: {
    Accept: "*",
    "Content-Type": "application/json",
  },
});

export const getMain = async () => {
  try {
    const { data } = await http.get("/api/");
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const registerUser = async (data) => {
  try {
    const res = await http.post("/user/register", data);
    return res
  } catch (err) {
    console.log(err);
  }
};
export const loginUser = async (data) => {
  try {
    const res = await http.post("/user/login", data);
    return res
  } catch (err) {
    console.log(err);
  }
};
