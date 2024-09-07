import { createContext, useEffect, useRef, useState } from "react";
import { getMain, initUser } from "../services/HTTP";

export const mainContext = createContext({
  Indexes: [],
  activeIndex: {},
  setActiveById: () => { },
});
const MianContextProvider = ({ children }) => {
  const [Indexes, setIndexes] = useState([]);
  const [activeIndex, setActiveIndex] = useState({});
  const [user, setUser] = useState({})
  async function init() {
    const mainData = await getMain();
    const user = await initUser()
    setUser(user?.user || {})
    setIndexes(mainData?.all || []);
    setActiveIndex(mainData?.all[0] || {});
  }
  const setActiveById = (id) => {
    const newIndex = Indexes.find(i => i._id === id)
    if (newIndex) {
      setActiveIndex(newIndex)
    }
  }
  const clearUser = ()=>{
    setUser([])
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <mainContext.Provider value={{ Indexes, activeIndex, setActiveById, init, user,clearUser }}>
      {children}
    </mainContext.Provider>
  );
};

export default MianContextProvider;
