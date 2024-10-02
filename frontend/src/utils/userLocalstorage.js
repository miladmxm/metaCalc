import constant from "../constant";

export const saveUser = (userData) => {
  localStorage.setItem(
    constant.USER_LOCALSTORAGE_KEY,
    JSON.stringify(userData)
  );
};

export const getUser = () => {
  let userData = localStorage.getItem(constant.USER_LOCALSTORAGE_KEY);
  try {
    return JSON.parse(userData);
  } catch (err) {
    if (err) return null;
  }
};

export const removeUser = () => {
  localStorage.removeItem(constant.USER_LOCALSTORAGE_KEY);
};

export default {
  removeUser,saveUser,getUser
}