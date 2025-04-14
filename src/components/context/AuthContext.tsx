import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { type User, type AuthContextType } from "../types/type";
import { supabase } from "../config/db";
import { useLocation, useNavigate } from "react-router-dom";
import { useLoading } from "../hooks/useLoading";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const { loading, loadingFalse, loadingTrue } = useLoading();
  const navigate = useNavigate();
  const location = useLocation();

  const signInWithGoogle = async (): Promise<void> => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
      });
      if (error) throw new Error("Error al autenticar al usuario");
    } catch (error) {
      console.error(error);
    }
  };

  const logOut = async () => {
    loadingTrue();
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("Error al cerrar sesion");
      setUser(null);
    } catch (error) {
      console.error(error);
    } finally {
      loadingFalse();
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      loadingFalse();
    });

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
        if (_event === "SIGNED_IN" && location.pathname === "/")
          navigate("/home");
      }
    );

    return () => {
      listener?.subscription.unsubscribe();
    };
  }, [navigate]);

  const value = { logOut, loading, signInWithGoogle, user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("Error al usar el contexto de autenticacion");
  return authContext;
};
