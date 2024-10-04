import { NavLink, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import cn from "classnames"

import LanguageSwitch from "../components/LanguageSwitch";
import logo from "../assets/Images/meta.webp";
import ThemeSwitch from "../components/ThemeSwitch";
import InstallPWAbtn from "../components/installPWAbtn";
import useUser from "../hooks/useUser";

const MainLayout = ({ children }) => {
  const { t } = useTranslation();
  const location = useLocation();
  const {user} = useUser()
  const isWeekly =
    location.pathname.includes("weekly") || location.pathname.includes("login") || location.pathname.includes("dashboard") ;
  return (
    <main className={cn("max-w-2xl transition-all duration-300 grid-rows-3 max-h-svh h-svh mx-auto grid relative overflow-hidden",{
      "grid-rows-[120px_calc(100svh-48px-120px)_48px]":!isWeekly,
      "grid-rows-[80px_calc(100svh-48px-80px)_48px]":isWeekly,
    })}
  
    >
      <InstallPWAbtn />
      <header
        dir="ltr"
        className={`flex items-center justify-between transition-all duration-300 px-3 py-4 `}
      >
        <div className="flex-1 justify-start flex">
          <LanguageSwitch className="flex-1" />
        </div>
        <div className="flex-auto flex items-center justify-center h-full max-h-full">
          <img className="max-h-full" src={logo} alt="logo" />
        </div>
        <div className="flex-1 flex justify-end">
          <ThemeSwitch />
        </div>
      </header>
      <section className=" px-3 py-4">{children}</section>
      <footer className="flex items-start justify-center  px-3">
        <nav className="dark:bg-primary/10 backdrop-blur-md bg-primary/60 rounded-lg w-full">
          <ul className="flex justify-between items-center [&>li]:w-1/3 [&_small]:leading-[0]">
            <li>
              <NavLink
                to={"weekly"}
                className={
                  "opacity-45 transition-all duration-300 [&.active]:opacity-100 dark:[&.active]:text-primary [&.active]:text-white p-2 center gap-1 h-10 [&>svg]:h-full "
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M416 64h-16V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 368 48v16H144V48.45c0-8.61-6.62-16-15.23-16.43A16 16 0 0 0 112 48v16H96a64 64 0 0 0-64 64v12a4 4 0 0 0 4 4h440a4 4 0 0 0 4-4v-12a64 64 0 0 0-64-64zm60 112H36a4 4 0 0 0-4 4v236a64 64 0 0 0 64 64h320a64 64 0 0 0 64-64V180a4 4 0 0 0-4-4zM239.58 401.1c-12.17 9.61-28.75 14.9-46.7 14.9-27.87 0-48.48-18.16-57.66-33.7a16 16 0 0 1 27.56-16.3c1.08 1.84 11.15 18 30.1 18 16.66 0 36.12-7.29 36.12-27.82 0-6.25-1.22-14.95-7-20.88-8.54-8.74-22.75-12.67-30.11-12.67a16 16 0 0 1 0-32c4.85 0 17.41-2.6 25.28-10.65a22 22 0 0 0 6.57-16.08c0-23.23-28.63-23.9-31.89-23.9-17.34 0-23.8 10.61-24.07 11.06a16 16 0 1 1-27.55-16.26c7.64-13 25.22-26.8 51.62-26.8 16.44 0 31.76 4.77 43.13 13.42 13.39 10.2 20.76 25.28 20.76 42.48A54 54 0 0 1 240 302.35c-1.15 1.18-2.36 2.28-3.59 3.35a66.18 66.18 0 0 1 8.42 7.23c10.56 10.8 16.14 25.75 16.14 43.25.03 18.06-7.58 34.01-21.39 44.92zM368 396a16 16 0 0 1-32 0V256.29l-22.51 16.59a16 16 0 1 1-19-25.76l43.42-32a16 16 0 0 1 9.49-3.12h4.6a16 16 0 0 1 16 16z"></path>
                </svg>
                <small className="hidden sm:center">{t("Weekly income")}</small>
              </NavLink>
            </li>
            <li>
              <NavLink
                end
                to={""}
                className={
                  "opacity-45 transition-all duration-300 [&.active]:opacity-100 dark:[&.active]:text-primary [&.active]:text-white p-2 center gap-1 h-10 [&>svg]:h-full "
                }
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19 19V9.79875L12 4.27675L5 9.79875V19H19ZM21 20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V9.31391C3 9.00773 3.14027 8.71843 3.38065 8.52879L11.3807 2.21793C11.7438 1.93142 12.2562 1.93142 12.6193 2.21793L20.6193 8.52879C20.8597 8.71843 21 9.00773 21 9.31391V20ZM7 12H9C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12H17C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12Z"></path>
                </svg>
                <small className="hidden sm:center">{t("Home")}</small>
              </NavLink>
            </li>
            <li>
              {user?.username ? (
                <NavLink
                  to={"dashboard"}
                  className={
                    "opacity-45 transition-all duration-300 [&.active]:opacity-100 dark:[&.active]:text-primary [&.active]:text-white p-2 center gap-1 h-10 [&>svg]:h-full "
                  }
                >
                  <svg
                    stroke="currentColor"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="12" cy="8" r="5"></circle>
                    <path d="M20 21a8 8 0 1 0-16 0"></path>
                  </svg>
                  <small className="hidden sm:center">{t("Dashboard")}</small>
                </NavLink>
              ) : (
                <NavLink
                  to={"login"}
                  className={
                    "opacity-45 transition-all duration-300 [&.active]:opacity-100 dark:[&.active]:text-primary [&.active]:text-white p-2 center gap-1 h-10 [&>svg]:h-full "
                  }
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M218.1 167.2c0 13 0 25.6 4.1 37.4-43.1 50.6-167.5 194.5-167.5 194.5l2.9 36.3s34.8 33 40 28c15.4-15 24.8-25.2 24.8-25.2l7.24-43.35 47.11-3.47 3.78-46.8 49.63-.95.49-50.09 52.69 2.1 9-18.84c15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.4-121.9 119.2zM406.85 144A38.85 38.85 0 1 1 368 105.15 38.81 38.81 0 0 1 406.85 144z"></path>
                  </svg>
                  <small className="hidden sm:center">{t("Sign-in/up")}</small>
                </NavLink>
              )}
            </li>
          </ul>
        </nav>
      </footer>
    </main>
  );
};

export default MainLayout;
