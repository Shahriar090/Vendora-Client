import { useAuth } from "@/Hooks/useAuth";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router";

const ProtectedRoute = ({
  children,
  allowedRole,
}: {
  children: ReactNode;
  allowedRole: "Seller" | "Customer";
}) => {
  const { auth } = useAuth();
  const location = useLocation();

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (auth.user?.role !== allowedRole) {
    const redirectPath =
      auth.user?.role === "Seller"
        ? "/seller/dashboard"
        : "/customer/dashboard";
    return <Navigate to={redirectPath} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
