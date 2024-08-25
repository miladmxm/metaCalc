import { Outlet } from "react-router-dom";
import MainLayout from "./layouts/main";
import SettingContextProvider from "./context/setting";
import MianContextProvider from "./context/main";

function App() {
  return (
    <SettingContextProvider>
      <MainLayout>
        <MianContextProvider>
          <Outlet />
        </MianContextProvider>
      </MainLayout>
    </SettingContextProvider>
  );
}

export default App;
