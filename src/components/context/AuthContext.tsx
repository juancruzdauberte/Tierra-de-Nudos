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

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
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
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw new Error("Error al cerrar sesion");
      setUser(null);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
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

  const value = { logOut, signInWithGoogle, user };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);
  if (!authContext)
    throw new Error("Error al usar el contexto de autenticacion");
  return authContext;
};
