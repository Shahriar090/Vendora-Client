import { AuthContext } from "@/Contexts";
import type { TAuthContext } from "@/types/auth.types";
import { useContext } from "react";

export const useAuth = (): TAuthContext => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};
