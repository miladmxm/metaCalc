// import { createContext, useEffect, useState } from "react";
// import { getMain } from "../services/HTTP";
// import Loading from "../components/loading";
// import { useIsFetching } from "@tanstack/react-query";

// export const mainContext = createContext({
//   Indexes: [],
//   activeIndex: {},
//   setActiveById: () => {},
//   setHttpLoading: () => {},
//   clearUser: () => {},
//   init: () => {},
// });
// const MianContextProvider = ({ children }) => {
//   const [Indexes, setIndexes] = useState([]);
//   const [activeIndex, setActiveIndex] = useState({});
//   const [initLoading, setInitLoading] = useState(true);
//   const isFetching = useIsFetching()
//   async function init() {
//     const mainData = await getMain();

//     setIndexes(mainData?.all || []);
//     setInitLoading(false);
//   }
  
//   useEffect(() => {
//     init();
//   }, []);
//   return (
//     <mainContext.Provider
//       value={{
//         Indexes,
//         activeIndex,
//         setActiveById,
//         init,
//       }}
//     >
//       {isFetching ? <Loading />:null}
//       {initLoading ? <Loading /> : children}
//     </mainContext.Provider>
//   );
// };

// export default MianContextProvider;
