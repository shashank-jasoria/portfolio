"use client";
import { createContext, useContext, useState, ReactNode } from "react";

// Create a context for isCvView
const CvViewContext = createContext<
  { isCvView: boolean; setIsCvView: (value: boolean) => void } | undefined
>(undefined);

export const useCvView = () => {
  const context = useContext(CvViewContext);
  if (!context) {
    throw new Error("useCvView must be used within a CvViewProvider");
  }
  return context;
};

// Provider for isCvView
export function CvViewProvider({ children }: { children: ReactNode }) {
  const [isCvView, setIsCvView] = useState(false);

  return (
    <CvViewContext.Provider value={{ isCvView, setIsCvView }}>
      {children}
    </CvViewContext.Provider>
  );
}
