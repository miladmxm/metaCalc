import { useContext, useState } from "react";
import { settingContext } from "../context/setting";
import {supportedLngs} from "../config/langs"
import { useTranslation } from "react-i18next";
const LanguageSwitch = () => {
  const { language, handleLanguageChange } = useContext(settingContext);
  const {t} = useTranslation()
  const [displayLangs,setDisplayLangs] = useState(false)
  const handleChange = (lang)=>{
    handleLanguageChange(lang)
    setDisplayLangs(false)
  }

  return (
    <div className="uppercase">
      <div className="ring-2 ring-text h-7 rounded-lg center w-auto">
        <button onClick={()=>setDisplayLangs(pre=>!pre)} className="w-7 center">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            version="1.1"
            viewBox="0 0 16 16"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 15c-0.984 0-1.92-0.203-2.769-0.57l3.643-4.098c0.081-0.092 0.126-0.21 0.126-0.332v-1.5c0-0.276-0.224-0.5-0.5-0.5-1.765 0-3.628-1.835-3.646-1.854-0.094-0.094-0.221-0.146-0.354-0.146h-2c-0.276 0-0.5 0.224-0.5 0.5v3c0 0.189 0.107 0.363 0.276 0.447l1.724 0.862v2.936c-1.813-1.265-3-3.366-3-5.745 0-1.074 0.242-2.091 0.674-3h1.826c0.133 0 0.26-0.053 0.354-0.146l2-2c0.094-0.094 0.146-0.221 0.146-0.354v-1.21c0.634-0.189 1.305-0.29 2-0.29 1.1 0 2.141 0.254 3.067 0.706-0.065 0.055-0.128 0.112-0.188 0.172-0.567 0.567-0.879 1.32-0.879 2.121s0.312 1.555 0.879 2.121c0.569 0.569 1.332 0.879 2.119 0.879 0.049 0 0.099-0.001 0.149-0.004 0.216 0.809 0.605 2.917-0.131 5.818-0.007 0.027-0.011 0.055-0.013 0.082-1.271 1.298-3.042 2.104-5.002 2.104z"></path>
          </svg>
        </button>
        <div className={`${displayLangs?"w-16":"w-0"} overflow-hidden flex justify-around transition-all duration-300`}>
        {supportedLngs.map(lang=>(
          <button className={`uppercase center font-Inter ${language === lang?"text-text":"text-gray-600"}`} key={lang} onClick={()=>handleChange(lang)}>{t(lang)}</button>
        ))}
        </div>
      </div>
    </div>
  );
};
export default LanguageSwitch;
