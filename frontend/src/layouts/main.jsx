import LanguageSwitch from "../components/LanguageSwitch";
import logo from "../assets/Images/meta.webp";
import ThemeSwitch from "../components/ThemeSwitch";
const MainLayout = ({ children }) => {
  return (
    <main className="max-w-2xl mx-auto py-4 p-3 md:p-8 space-y-10">
      <header dir="ltr" className="flex items-center justify-between h-20">
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
      {children}
    </main>
  );
};

export default MainLayout;
