import { useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { mainContext } from "../../context/main";
import calculateMeta from "../../utils/calculate";

const Home = () => {
  const { t } = useTranslation();
  const { Indexes, activeIndex, setActiveById } = useContext(mainContext);
  const [errMessage, setErrMessage] = useState("");
  const [resolve, setResolve] = useState([]);
  const formRef = useRef();
  const resultRef = useRef();
  const handleSubmitForm = async (e) => {
    e.preventDefault();
    const value = e.target["input"].value.trim();
    const reg = new RegExp(/^[+]?\d+(\.\d+)?$/);
    if (!value || !reg.test(value)) {
      setErrMessage(t("Please enter the amount of your capital in numbers!"));
    } else {
      try {
        const { lot, profit } = await calculateMeta(activeIndex, value);
        setResolve([lot, profit]);
        resultRef.current.classList.add("active");
      } catch (err) {
        console.log(err);
      }
    }
  };
  const reset=()=>{
    resultRef.current.classList.remove("active");
    formRef.current["input"].value = "";
    setTimeout(() => {
      setResolve([]);
    }, 400);
  }
  useEffect(() => {
    reset()
  }, [activeIndex]);

  const alertCopy = useRef();
  const timoutId = useRef();
  function copyToClipbord(txt) {
    if (timoutId.current) {
      return;
    }
    navigator.clipboard.writeText(txt);
    alertCopy.current.classList.add("active");
    timoutId.current = setTimeout(() => {
      alertCopy.current.classList.remove("active");
      timoutId.current = null;
    }, 1500);
  }
  return (
    <div className="space-y-5">
      <h4>{t("Select the desired index")}</h4>
      <div className="flex gap-5">
        {Indexes.map((index) => (
          <button
            onClick={() => setActiveById(index._id)}
            className={`${
              activeIndex._id === index._id ? "bg-primary" : "bg-gray-800/50"
            } hover:ring-2 transition-all duration-300 ring-success p-2 flex-1 max-w-20 rounded-xl text-white`}
            key={index.name}
          >
            {index.name}
          </button>
        ))}
      </div>

      <form
        ref={formRef}
        autoComplete="off"
        onSubmit={(e) => handleSubmitForm(e)}
      >
        <fieldset
          className={`${
            errMessage !== ""
              ? "border-error/70 text-error/70"
              : "border-text/70"
          } border rounded-lg p-2 flex relative justify-end flex-wrap`}
        >
          <legend className="mx-3 px-1">{t("Enter your capital")}</legend>
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
            onInput={() => {
              if (errMessage !== "") setErrMessage("");
              if(resultRef.current.classList.contains("active")){
                resultRef.current.classList.remove("active");
              }
            }}
            step="0.001"
            name="input"
            placeholder="100.112"
            type="number"
            className="border-none flex-auto !bg-transparent outline-none"
          />

          <button
            type="submit"
            className="w-10 text-text center ring-2 bg-primary/20 rounded absolute h-9 -top-1"
          >
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M7 2H5v3H2v2h3v3h2V7h3V5H7V2zm7 3h8v2h-8zm0 10h8v2h-8zm0 4h8v2h-8zm-5.71-4.71L6 16.59l-2.29-2.3-1.42 1.42L4.59 18l-2.3 2.29 1.42 1.42L6 19.41l2.29 2.3 1.42-1.42L7.41 18l2.3-2.29-1.42-1.42z"></path>
            </svg>
          </button>
          <small
            className={`block w-full text-error ${
              errMessage !== "" ? "h-6 mt-1" : "h-0"
            } transition-all duration-300 overflow-hidden`}
          >
            {errMessage}
          </small>
        </fieldset>
      </form>
      <div
        ref={resultRef}
        className="flex flex-col items-center gap-3 
      [&.active>div]:translate-y-0
      [&.active>div]:opacity-100
      [&.active>div]:scale-100
      [&.active>div]:pointer-events-auto
        "
      >
        <div
          onClick={() => copyToClipbord(resolve[0])}
          className={`md:w-1/2 w-5/6 dark:bg-primary/5
            opacity-0 pointer-events-none transition-all duration-300 translate-y-5 scale-95
            dark:text-text bg-gray-700 text-baseColor p-4 rounded-lg justify-between flex items-center
            `}
        >
          {t("Trading volume (lot): ")} <span> {resolve[0]}</span>
        </div>
        <div
          className="md:w-1/2 w-5/6 dark:bg-primary/5 
            opacity-0 pointer-events-none transition-all duration-300 translate-y-5 scale-95
            delay-100
          dark:text-text bg-gray-700 text-baseColor p-4 rounded-lg justify-between flex items-center"
        >
          {t("Closing Price: ")}{" "}
          <span className="text-success center rtl:flex-row-reverse">
            {" "}
            {resolve[1]}
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
          </span>
        </div>
      </div>

      <div
        ref={alertCopy}
        className={`fixed left-0 [&.active]:opacity-100 [&.active]:translate-y-0 bottom-[15%] pointer-events-none w-full translate-y-10 center transition-all opacity-0 duration-300`}
      >
        <div className="p-2 bg-gray-800 text-white rounded-lg ">
          {t("Copied")}
        </div>
      </div>
    </div>
  );
};

export default Home;
