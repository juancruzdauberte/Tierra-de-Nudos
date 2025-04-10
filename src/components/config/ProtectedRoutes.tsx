import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoutes = () => {
  const { user, loading } = useAuth();
  if (loading)
    return <div className="text-center mt-10">Cargando sesión...</div>;

  if (!user) return <Navigate to="/" />;

  return <Outlet />;
};
