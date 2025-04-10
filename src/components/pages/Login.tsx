import { useAuth } from "../context/AuthContext";
import { FcGoogle } from "react-icons/fc";
import { BtnTheme } from "../layout/BtnTheme";

export const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <section className="flex flex-col items-center gap-6 dark:bg-zinc-700 shadow-xl rounded-2xl p-12  ">
        <div className="rounded-full h-28 w-28 overflow-hidden">
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045695/logo_j6mmee.png"
            alt="logo"
            className="object-cover w-full h-full"
          />
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-center">
          Loguearse en <span className="text-primary">Tierra de Nudos</span>
        </h1>
        <section className="flex flex-col items-center gap-4 mt-12">
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-3 w-60 md:w-full py-2 px-4   bg-red-600 hover:bg-red-500 text-white transition-colors rounded-lg"
          >
            <FcGoogle className="text-xl" />
            <span className="font-medium">Continuar con Google</span>
          </button>

          <BtnTheme />
        </section>
      </section>
    </section>
  );
};
