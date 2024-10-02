import { createContext, useEffect, useState } from "react";
import { getMain } from "../services/HTTP";
import Loading from "../components/loading";

export const mainContext = createContext({
  Indexes: [],
  activeIndex: {},
  setActiveById: () => {},
  setHttpLoading: () => {},
  clearUser: () => {},
  init: () => {},
});
const MianContextProvider = ({ children }) => {
  const [Indexes, setIndexes] = useState([]);
  const [activeIndex, setActiveIndex] = useState({});
  const [initLoading, setInitLoading] = useState(true);
  const [httpLoading, setHttpLoading] = useState(false);
  async function init() {
    const mainData = await getMain();

    setIndexes(mainData?.all || []);
    setActiveIndex(mainData?.all[0] || {});
    setInitLoading(false);
  }
  const setActiveById = (id) => {
    const newIndex = Indexes.find((i) => i._id === id);
    if (newIndex) {
      setActiveIndex(newIndex);
    }
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <mainContext.Provider
      value={{
        Indexes,
        activeIndex,
        setActiveById,
        init,
        clearUser,
        setHttpLoading,
      }}
    >
      {httpLoading && <Loading />}
      {initLoading ? <Loading /> : children}
    </mainContext.Provider>
  );
};

export default MianContextProvider;
