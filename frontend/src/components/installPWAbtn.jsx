import { useEffect, useState } from "react";
import { isMobile } from "react-device-detect";

const InstallPWAbtn = () => {
    const [isDisplay, setIsDisplay] = useState(false)
    const [deferredPrompt, setDeferredPrompt] = useState(null)
  useEffect(() => {
    const handleBeforeInstallPrompt=(e)=>{
        e.preventDefault()
        setIsDisplay(true)
        setDeferredPrompt(e)
    }
    window.addEventListener("beforeinstallprompt",handleBeforeInstallPrompt)
    return()=>{
        window.removeEventListener("beforeinstallprompt",handleBeforeInstallPrompt)
    }
  }, []);
  const handleInstallClick=()=>{
    if(deferredPrompt){
        deferredPrompt.prompt()
        deferredPrompt.userChoice.then(result=>{
            setDeferredPrompt(null)
            setIsDisplay(false)
        })
    }
  }
  if(isDisplay){
      return (
        <button onClick={handleInstallClick} className="absolute right-5 bottom-1/4 bg-primary/10 p-3 h-12 aspect-square rounded-lg">
          {isMobile ? (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M17 18H7V6h7V1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-5h-2v2z"></path>
              <path d="m18 14 5-5-1.41-1.41L19 10.17V3h-2v7.17l-2.59-2.58L13 9z"></path>
            </svg>
          ) : (
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M20 17H4V5h8V3H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h4v2h8v-2h4c1.1 0 2-.9 2-2v-3h-2v3z"></path>
              <path d="m17 14 5-5-1.41-1.41L18 10.17V3h-2v7.17l-2.59-2.58L12 9z"></path>
            </svg>
          )}
        </button>
      );
  }else{
    return null
  }
};

export default InstallPWAbtn;
