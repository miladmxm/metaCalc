import { createContext, useEffect, useState } from "react";
import { getMain } from "../services/HTTP";

export const mainContext = createContext({
  Indexes: [],
  activeIndex:{},
  setActiveById:()=>{},
});
const MianContextProvider = ({ children }) => {
  const [Indexes, setIndexes] = useState([]);
  const [activeIndex, setActiveIndex] = useState({});
  async function init() {
    const { all } = await getMain();
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
    <mainContext.Provider value={{ Indexes, activeIndex,setActiveById }}>
      {children}
    </mainContext.Provider>
  );
};

export default MianContextProvider;
