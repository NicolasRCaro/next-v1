"use client";
import { createContext, useContext, useState } from "react";

interface AppContextType {
  nombre: string;
  setNombre: (value: string) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [nombre, setNombre] = useState("Nicolas");

  return (
    <AppContext.Provider value={{ nombre, setNombre }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextType {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }
  return context;
}