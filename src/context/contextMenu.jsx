import { createContext, useContext } from "react";
import data from "../assets/data";

const contextMenu = createContext();

export function MenuProvider({ children }) {
  return (
    <contextMenu.Provider value={{ menu: data.menu }}>
      {children}
    </contextMenu.Provider>
  );
}
export function useMenu() {
  return useContext(contextMenu);
}
