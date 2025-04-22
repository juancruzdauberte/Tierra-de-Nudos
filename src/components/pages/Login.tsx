import { GoogleWidget } from "../common/GoogleWidget";
import { useAuth } from "../context/AuthContext";
import { useForm } from "@tanstack/react-form";

export const Login = () => {
  const { signInWithGoogle, signInWithMagicLink } = useAuth();

  const form = useForm({
    defaultValues: {
      email: "",
    },
    onSubmit: async ({ value }) => await signInWithMagicLink(value.email),
  });

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <section className="w-full flex flex-col gap-10 max-w-md bg-white shadow-lg rounded-md p-8 space-y-6 ">
        <div className="flex flex-col items-center">
          <img
            src="https://res.cloudinary.com/dttpgbmdx/image/upload/v1739045695/logo_j6mmee.png"
            alt=""
            className="h-28 rounded-full "
          />
          <h1 className="text-3xl font-bold text-center text-customBrown">
            Iniciar sesión
          </h1>
        </div>

        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              form.handleSubmit();
            }}
            className="space-y-4 "
          >
            <form.Field
              name="email"
              validators={{
                onSubmit: ({ value }) => {
                  const emailReggex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  return !emailReggex.test(value.trim())
                    ? "Formato de email inválido"
                    : undefined;
                },
              }}
            >
              {(field) => (
                <div className="flex flex-col gap-1">
                  <label className="text-slate-700 font-medium">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    placeholder="tucorreo@ejemplo.com"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    className="px-4 py-2 border border-gray-300 rounded-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-black "
                  />
                  {field.state.meta.errors.length > 0 && (
                    <em className="text-red-500 text-sm">
                      {field.state.meta.errors.join(", ")}
                    </em>
                  )}
                </div>
              )}
            </form.Field>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-sm font-semibold hover:bg-zinc-800 transition-colors"
            >
              Enviar
            </button>
          </form>
        </div>

        <div>
          <button
            onClick={signInWithGoogle}
            className="flex items-center justify-center gap-2 w-full bg-red-600 hover:bg-red-700 text-white py-2 px-4 rounded-sm font-semibold transition-colors "
          >
            <GoogleWidget />
            Continuar con Google
          </button>
        </div>
      </section>
    </main>
  );
};
