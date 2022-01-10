import { createContext, useContext } from "react";

const MainContext = createContext();
export const useMainContext = () => useContext(MainContext);

const MainProvider = ({ children }) => {
  //

  //
  const value = {};
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export default MainProvider;
