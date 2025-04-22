import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedCheckEmailRoute = ({
  children,
}: {
  children: ReactNode;
}) => {
  const { checkEmail } = useAuth();

  return checkEmail ? children : <Navigate to="/" />;
};
