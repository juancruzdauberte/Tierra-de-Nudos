import { useForm } from "@tanstack/react-form";
import { type Message } from "../types/type";
import { submitMessage } from "../../services";
import { toast } from "sonner";
import { useAuth } from "../context/AuthContext";

export const Contact = () => {
  const { user } = useAuth();

  const form = useForm({
    defaultValues: {
      full_name: "",
      email: "",
      message: "",
    } as Message,
    onSubmit: async ({ value, formApi }) => {
      const messageValue = {
        full_name: value.full_name,
        email: value.email,
        message: value.message,
        userId: user?.id || "",
      };
      const createdMessage = await submitMessage(messageValue);
      if (createdMessage) {
        toast.success("Mensaje enviado con exito");
        formApi.reset();
      }
    },
  });

  return (
    <section className="bg-white dark:bg-zinc-700 p-6 rounded-sm shadow-md w-[300px] md:w-[400px] lg:w-[480px]">
      <h2 className="font-bold mb-4">Dejanos tu mensaje</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
        className="flex flex-col gap-5"
      >
        <form.Field
          name="full_name"
          validators={{
            onSubmit: ({ value }) => {
              const nameReggex = /^[a-zA-ZÀ-ÿ\s]+$/;
              if (!nameReggex.test(value.trim()))
                return "Solo letras y espacios";
              return undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col gap-1">
              <label className="font-medium">
                Nombre y Apellido <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border border-gray-300 dark:bg-zinc-500 rounded-md p-2"
                placeholder="Nombre y apellido"
              />
              {field.state.meta.errors.length > 0 && (
                <em className="text-red-500 text-sm">
                  {field.state.meta.errors.join(", ")}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="email"
          validators={{
            onSubmit: ({ value }) => {
              const emailReggex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              return !emailReggex.test(value.trim())
                ? "Email inválido"
                : undefined;
            },
          }}
        >
          {(field) => (
            <div className="flex flex-col gap-1">
              <label className="font-medium">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="border border-gray-300 dark:bg-zinc-500 rounded-md p-2"
                placeholder="Email@email.com"
              />
              {field.state.meta.errors.length > 0 && (
                <em className="text-red-500 text-sm">
                  {field.state.meta.errors.join(", ")}
                </em>
              )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="message"
          validators={{
            onSubmit: ({ value }) =>
              value.trim() === "" ? "Mensaje requerido" : undefined,
          }}
        >
          {(field) => (
            <div className="flex flex-col gap-1">
              <label className="font-medium">
                Mensaje <span className="text-red-600">*</span>
              </label>
              <textarea
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                className="min-h-[150px] border border-gray-300 dark:bg-zinc-500 rounded-md p-2 resize-none"
                placeholder="Mensaje"
              ></textarea>

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
          className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  );
};
