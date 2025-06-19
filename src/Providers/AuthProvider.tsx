import { AuthContext } from "@/Contexts";
import type { TAuthContext, TAuthData } from "@/types/auth.types";
import { useCallback, useMemo, useState, type ReactNode } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  // lazy initializer ()=>{}
  const [auth, setAuth] = useState<TAuthData>(() => {
    const storedAuthData = localStorage.getItem("auth");
    return storedAuthData
      ? JSON.parse(storedAuthData)
      : { user: null, accessToken: "" };
  });

  const setAuthData = useCallback((authData: TAuthData) => {
    setAuth(authData);
    localStorage.setItem("auth", JSON.stringify(authData));
  }, []);

  const value: TAuthContext = useMemo(
    () => ({
      auth,
      setAuthData,
    }),
    [auth, setAuthData]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
