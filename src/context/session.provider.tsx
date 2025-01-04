import { useEffect, useState } from "react";
import axios from "axios";
import { SessionContext, SessionContextType, User } from "./session.context";

export const SessionProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [session, setSession] = useState<SessionContextType["session"]>({
    status: "pending",
    user: null,
  });

  const getUser = async () => {
    try {
      const res = await axios.get<User>(
        `${import.meta.env.VITE_API_URL}/auth/session`,
        { withCredentials: true }
      );

      if (res.status === 200) {
        setSession({
          status: "authenticated",
          user: res.data,
        });
        return;
      }
    } catch (error) {
      console.error("Session fetch error:", error);
    }

    setSession({
      status: "unauthenticated",
      user: null,
    });
  };

  useEffect(() => {
    getUser();
  }, []);

  const clearSession = () => {
    setSession({
      status: "unauthenticated",
      user: null,
    });
  };

  const value: SessionContextType = {
    session,
    setSession,
    clearSession,
  };

  return (
    <SessionContext.Provider value={value}>{children}</SessionContext.Provider>
  );
};
