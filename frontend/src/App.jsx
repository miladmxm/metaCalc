import { Outlet } from "react-router-dom";
import SettingContextProvider from "./context/setting";
import MianContextProvider from "./context/main";
function App() {

  return (
    <SettingContextProvider>
      <MianContextProvider>
        <Outlet />
      </MianContextProvider>
    </SettingContextProvider>
  );
}

export default App;
