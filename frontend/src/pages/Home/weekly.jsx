import React from "react";
import { useTranslation } from "react-i18next";

const Weekly = () => {
  const { t } = useTranslation();
  const handleFormSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="h-full">
      <h2 className="mb-10">{t("Weekly income")}</h2>
      <form className="overflow-auto max-h-[90%]" onSubmit={handleFormSubmit}>
        <div className="flex gap-5">
          <div className="w-1/2 space-y-2">
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
          </div>
          <div className="w-1/2 space-y-2">
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
            <fieldset
              className={` border-[1px] dark:border-text/70 border-text rounded-lg p-2 flex relative justify-end flex-wrap`}
            >
              <legend className="mx-3 px-1 text-sm dark:text-text/70">
                {t("Monday profit")}
              </legend>
              <div className="center ">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line x1="12" y1="1" x2="12" y2="23"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <input
                //   onInput={() => {
                //     if (errMessage !== "") setErrMessage("");
                //     if (resultRef.current.classList.contains("active")) {
                //       resultRef.current.classList.remove("active");
                //     }
                //   }}
                step="0.001"
                name="input"
                placeholder={t("100.112 OR -100.112")}
                type="number"
                className="border-none flex-auto !bg-transparent outline-none"
              />
              {/* <small
              className={`block w-full text-error transition-all duration-300 overflow-hidden`}
            >
              {errMessage}
            </small> */}
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Weekly;
