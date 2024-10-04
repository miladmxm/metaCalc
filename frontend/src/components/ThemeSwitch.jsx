const ThemeSwitch = () => {
  const manuallyChangeTheme = () => {
    document.documentElement.classList.toggle("dark");
    localStorage.setItem(
      "them",
      document.documentElement.classList.contains("dark") ? "dark" : "light"
    );
  };
  return (
    <button
      onClick={manuallyChangeTheme}
      className="ring-2 overflow-hidden ring-text h-7 w-7 relative rounded-lg center"
    >
      <svg
        className="absolute dark:translate-x-7 translate-x-0 transition-all duration-300 dark:rotate-45"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M401.4 354.2c-2.9.1-5.8.2-8.7.2-47.9 0-93-18.9-126.8-53.4-33.9-34.4-52.5-80.1-52.5-128.8 0-27.7 6.1-54.5 17.5-78.7 3.1-6.6 9.3-16.6 13.6-23.4 1.9-2.9-.5-6.7-3.9-6.1-6 .9-15.2 2.9-27.7 6.8C135.1 95.5 80 168.7 80 255c0 106.6 85.1 193 190.1 193 58 0 110-26.4 144.9-68.1 6-7.2 11.5-13.8 16.4-21.8 1.8-3-.7-6.7-4.1-6.1-8.5 1.7-17.1 1.8-25.9 2.2z"></path>
      </svg>
      <svg
        className="absolute dark:translate-x-0 translate-x-7 transition-all duration-300 dark:rotate-0 rotate-45"
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 512 512"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M256 118a22 22 0 0 1-22-22V48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm0 368a22 22 0 0 1-22-22v-48a22 22 0 0 1 44 0v48a22 22 0 0 1-22 22zm113.14-321.14a22 22 0 0 1-15.56-37.55l33.94-33.94a22 22 0 0 1 31.11 31.11l-33.94 33.94a21.93 21.93 0 0 1-15.55 6.44zM108.92 425.08a22 22 0 0 1-15.55-37.56l33.94-33.94a22 22 0 1 1 31.11 31.11l-33.94 33.94a21.94 21.94 0 0 1-15.56 6.45zM464 278h-48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm-368 0H48a22 22 0 0 1 0-44h48a22 22 0 0 1 0 44zm307.08 147.08a21.94 21.94 0 0 1-15.56-6.45l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.55 37.56zM142.86 164.86a21.89 21.89 0 0 1-15.55-6.44l-33.94-33.94a22 22 0 0 1 31.11-31.11l33.94 33.94a22 22 0 0 1-15.56 37.55zM256 358a102 102 0 1 1 102-102 102.12 102.12 0 0 1-102 102z"></path>
      </svg>
    </button>
  );
};

export default ThemeSwitch;
