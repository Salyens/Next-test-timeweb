"use client";

import * as React from "react";

const useRefContextValue = () => {
  const roomsRef = React.useRef<HTMLDivElement | null>(null);
  const aboutRef = React.useRef<HTMLDivElement | null>(null);
  const reviewsRef = React.useRef<HTMLDivElement | null>(null);
  const contactRef = React.useRef<HTMLDivElement | null>(null);
  const howToBookRef = React.useRef<HTMLDivElement | null>(null);
  
  return {
    roomsRef,
    aboutRef,
    howToBookRef,
    reviewsRef,
    contactRef,
  };
};

const RefContext = React.createContext<
  ReturnType<typeof useRefContextValue>
>({} as ReturnType<typeof useRefContextValue>);

type IRefContextProviderProps = {
  children: React.ReactNode;
};

const RefContextProvider = ({
  children,
}: IRefContextProviderProps) => {
  return (
    <RefContext.Provider value={useRefContextValue()}>
      {children}
    </RefContext.Provider>
  );
};
export default RefContextProvider;
export { RefContext };
