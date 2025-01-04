import { createContext } from "react";

export interface User {
  role: string;
  [key: string]: unknown;
}

export interface SessionContextType {
  session: {
    status: "pending" | "authenticated" | "unauthenticated";
    user: User | null;
  };
  setSession: (session: SessionContextType["session"]) => void;
  clearSession: () => void;
}

export const SessionContext = createContext<SessionContextType | undefined>(
  undefined
);
