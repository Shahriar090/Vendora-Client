import type { TAuthContext } from "@/types/auth.types";
import { createContext } from "react";

const AuthContext = createContext<TAuthContext | undefined>(undefined);

export { AuthContext };
