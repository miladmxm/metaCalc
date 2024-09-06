import { createContext, useEffect, useRef, useState } from "react";
import { getMain, initUser } from "../services/HTTP";

export const mainContext = createContext({
  Indexes: [],
  activeIndex:{},
  setActiveById:()=>{},
});
const MianContextProvider = ({ children }) => {
  const [Indexes, setIndexes] = useState([]);
  const [activeIndex, setActiveIndex] = useState({});
  const [user, setUser] = useState({})
  console.log(user)
  async function init() {
    const { all } = await getMain();
    const user = await initUser()
    setUser(user?.user||{})
    setIndexes(all);
    setActiveIndex(all[0]);
  }
  const setActiveById=(id)=>{
    const newIndex = Indexes.find(i=>i._id === id)
    if(newIndex){
        setActiveIndex(newIndex)
    }
  }
  useEffect(() => {
    init();
  }, []);
  return (
    <mainContext.Provider value={{ Indexes, activeIndex,setActiveById,init,user }}>
      {children}
    </mainContext.Provider>
  );
};

export default MianContextProvider;
