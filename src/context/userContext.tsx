"use client";
import { createContext } from "react";
import type { ReactNode } from "react";

export type User = {
  name: string;
  role: string;
};

export const UserContext = createContext<User | null>(null);

export function UserProvider({ children }: { children: ReactNode }) {
  const user = { name: "Ayesha", role: "Admin" };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
}
