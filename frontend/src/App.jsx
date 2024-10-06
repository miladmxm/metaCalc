import { Outlet } from "react-router-dom";
import SettingContextProvider from "./context/setting";
function App() {
  return (
    <SettingContextProvider>
      <Outlet />
    </SettingContextProvider>
  );
}

export default App;
