function handleChangeDirection(lang) {
  if (lang === "fa") {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "fa";
    return ['rtl',"fa"]
  } else if (document.documentElement.dir === "rtl") {
    document.documentElement.dir = "ltr";
    document.documentElement.lang = lang;
  }
  return ['ltr',lang]
}
export default handleChangeDirection