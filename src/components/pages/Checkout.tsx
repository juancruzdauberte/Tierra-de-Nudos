import { useForm } from "@tanstack/react-form";
import { type Orders, type Buyer } from "../types/type";
import { useCart } from "../context/CartContext";
import { submitOrder } from "../../services";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import { toast } from "sonner";
import { CartItemCard } from "../common/CartItemCard";

export const Checkout = () => {
  const { cart, totalAmount, cartEmpty } = useCart();
  const { user } = useAuth();
  const [submittedOrder, setSubmittedOrder] = useState<Orders | null>(null);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      address: "",
      province: "",
      cellphone: "",
      zipcode: "",
    } as Buyer,

    onSubmit: async ({ value }) => {
      const buyer: Buyer = {
        name: value.name,
        email: value.email,
        address: value.address,
        province: value.province,
        cellphone: value.cellphone,
        zipcode: value.zipcode,
      };

      const order: Orders = {
        items: cart,
        total: totalAmount(),
        buyer,
        user_id: user?.id,
      };

      const orderCreated = await submitOrder({ order });
      if (orderCreated) {
        setSubmittedOrder(orderCreated);
        toast.success("Compra realizada con exito");
        cartEmpty();
      }
    },
  });
  return (
    <section className="min-h-screen px-4 py-6 w-full">
      <div className="max-w-screen-xl w-full">
        {submittedOrder ? (
          <section className="text-center py-20">
            <h5 className="text-2xl font-semibold text-green-600">
              ¡Gracias por tu compra!
            </h5>
          </section>
        ) : (
          <section className="flex flex-col  lg:flex-row items-center lg:items-start lg:justify-between gap-10 lg:gap-0 ">
            <section className="flex flex-col items-start bg-white shadow-md p-4 rounded-sm gap-3 lg:w-2/6">
              <div>
                <h4 className="font-bold">Tu carrito</h4>
              </div>

              <div className="flex flex-col gap-5 w-full">
                {cart.map((item) => (
                  <CartItemCard key={item.id} item={item} isCheckout />
                ))}
              </div>
            </section>

            <section className="bg-white p-6 rounded-sm shadow-md w-[300px] md:w-[400px] lg:w-[480px]">
              <h2 className="font-bold mb-4">Datos de envío</h2>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  form.handleSubmit();
                }}
                className="flex flex-col gap-5"
              >
                <form.Field
                  name="name"
                  validators={{
                    onChange: ({ value }) =>
                      value.trim() === "" ? "Nombre requerido" : undefined,
                  }}
                >
                  {(field) => (
                    <div className="flex flex-col gap-1">
                      <label className="font-medium">Nombre y Apellido</label>
                      <input
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Nombre y apellido"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <span className="text-red-500 text-sm">
                          {field.state.meta.errors.join(", ")}
                        </span>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="email"
                  validators={{
                    onChange: ({ value }) =>
                      !value.includes("@") ? "Email inválido" : undefined,
                  }}
                >
                  {(field) => (
                    <div className="flex flex-col gap-1">
                      <label className="font-medium">Email</label>
                      <input
                        type="email"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Email@email.com"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <span className="text-red-500 text-sm">
                          {field.state.meta.errors.join(", ")}
                        </span>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="address"
                  validators={{
                    onChange: ({ value }) =>
                      value.trim() === "" ? "Dirección requerida" : undefined,
                  }}
                >
                  {(field) => (
                    <div className="flex flex-col gap-1">
                      <label className="font-medium">Dirección</label>
                      <input
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="Dirección 123"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <span className="text-red-500 text-sm">
                          {field.state.meta.errors.join(", ")}
                        </span>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="province"
                  validators={{
                    onChange: ({ value }) =>
                      value === "" ? "Seleccioná una provincia" : undefined,
                  }}
                >
                  {(field) => (
                    <div className="flex flex-col gap-1">
                      <label className="font-medium">Provincia</label>
                      <select
                        id="province"
                        name="province"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                      >
                        <option value="">-</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="Catamarca">Catamarca</option>
                        <option value="Chaco">Chaco</option>
                        <option value="Chubut">Chubut</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Corrientes">Corrientes</option>
                        <option value="Entre Ríos">Entre Ríos</option>
                        <option value="Formosa">Formosa</option>
                        <option value="Jujuy">Jujuy</option>
                        <option value="La Pampa">La Pampa</option>
                        <option value="La Rioja">La Rioja</option>
                        <option value="Mendoza">Mendoza</option>
                        <option value="Misiones">Misiones</option>
                        <option value="Neuquén">Neuquén</option>
                        <option value="Río Negro">Río Negro</option>
                        <option value="Salta">Salta</option>
                        <option value="San Juan">San Juan</option>
                        <option value="San Luis">San Luis</option>
                        <option value="Santa Cruz">Santa Cruz</option>
                        <option value="Santa Fe">Santa Fe</option>
                        <option value="Santiago del Estero">
                          Santiago del Estero
                        </option>
                        <option value="Tierra del Fuego">
                          Tierra del Fuego
                        </option>
                        <option value="Tucumán">Tucumán</option>
                      </select>
                      {field.state.meta.errors.length > 0 && (
                        <em className="text-red-500 text-sm">
                          {field.state.meta.errors.join(", ")}
                        </em>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="zipcode"
                  validators={{
                    onChange: ({ value }) =>
                      value.trim() === ""
                        ? "Código postal requerido"
                        : undefined,
                  }}
                >
                  {(field) => (
                    <div className="flex flex-col gap-1">
                      <label className="font-medium">Código Postal</label>
                      <input
                        type="text"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                        placeholder="4 digitos"
                        maxLength={4}
                      />
                      {field.state.meta.errors.length > 0 && (
                        <span className="text-red-500 text-sm">
                          {field.state.meta.errors.join(", ")}
                        </span>
                      )}
                    </div>
                  )}
                </form.Field>

                <form.Field
                  name="cellphone"
                  validators={{
                    onChange: ({ value }) =>
                      value.trim() === "" ? "Teléfono requerido" : undefined,
                  }}
                >
                  {(field) => (
                    <div className="flex flex-col gap-1">
                      <label className="font-medium">Teléfono</label>
                      <input
                        type="tel"
                        value={field.state.value}
                        onChange={(e) => field.handleChange(e.target.value)}
                        className="border border-gray-300 rounded-md p-2"
                      />
                      {field.state.meta.errors.length > 0 && (
                        <span className="text-red-500 text-sm">
                          {field.state.meta.errors.join(", ")}
                        </span>
                      )}
                    </div>
                  )}
                </form.Field>

                <button
                  type="submit"
                  className="mt-4 bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition"
                >
                  Comprar
                </button>
              </form>
            </section>
          </section>
        )}
      </div>
    </section>
  );
};
