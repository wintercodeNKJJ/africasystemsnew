import React, { createContext, useContext, useState } from "react";
import { Utils } from "../models";

const Context = createContext<Utils | null>(null);

interface Props {
  children: JSX.Element;
}

export const MyContext = ({ children }: Props) => {
  const data = 0;
  const [showMenu, setShowMenu] = useState(false);

  const menuVisibility = () => {
    setShowMenu(!showMenu);
  };
  return (
    <Context.Provider
      value={{
        menuVisibility,

        data,
        showMenu,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyContex = () => useContext<Utils | null>(Context);
