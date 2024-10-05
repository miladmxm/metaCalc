import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import i18n from "../config/i18n";
import handleChangeDirection from "../utils/changeDirection";
import { supportedLngs } from "../config/langs";
import useThemeDetector from '../hooks/useThemeColor'
import { useIsFetching } from "@tanstack/react-query";
import Loading from "../components/loading";
export const settingContext = createContext({
  language: "",
  dir: "ltr",
  handleLanguageChange: () => { },
});

const SettingContextProvider = ({ children }) => {
  const Navigate = useNavigate();
  const [language, setLanguage] = useState(i18n.language);
  const [dir, setDir] = useState('ltr');
  useThemeDetector();
  const isFetching = useIsFetching()
  const handleLanguageChange = (lang) => {
    const [pathLang, ...path] = location.pathname.slice(1).split("/");
    let newLang = lang || pathLang;
    if (supportedLngs.includes(newLang)) {
      setLanguage(newLang);
      const [direction] = handleChangeDirection(newLang);
      setDir(direction)
      i18n.changeLanguage(newLang);
    } else {
      newLang = "en";
    }
    Navigate(
      {
        ...location,
        pathname: `/${[newLang, ...path].join("/")}`,
      },
      { replace: true }
    );
  };

  useEffect(() => {
    handleLanguageChange();
  }, []);
  return (
    <settingContext.Provider value={{ handleLanguageChange, language, dir }}>
      {isFetching?<Loading />:null}
      {children}
    </settingContext.Provider>
  );
};

export default SettingContextProvider;
