import { Outlet } from "react-router-dom";
import SettingContextProvider from "./context/setting";
import MianContextProvider from "./context/main";
function App() {
  console.log( import.meta.env.VITE_API_META_URL);

  return (
    <SettingContextProvider>
      <MianContextProvider>
        <Outlet />
      </MianContextProvider>
    </SettingContextProvider>
  );
}

export default App;
