import React, { createContext, useContext } from "react";
import { Utils } from "../models";

const Context = createContext<Utils | null>(null);

interface Props {
  children: JSX.Element;
}

export const MyContext = ({ children }: Props) => {
  const data = 0;

  return (
    <Context.Provider
      value={{
        data,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useMyContex = () => useContext<Utils | null>(Context);
