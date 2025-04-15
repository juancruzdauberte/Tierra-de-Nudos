import { Link } from "react-router-dom";
import { CartItemCard } from "../common/CartItemCard";
import { useCart } from "../context/CartContext";
import { toast } from "sonner";

export const Cart = () => {
  const { cart, totalAmount, cartEmpty } = useCart();
  return (
    <section>
      {cart.length === 0 ? (
        <section className="flex flex-col gap-2 items-center">
          <p>Tu carrito actualmente se encuentra vacio</p>
          <Link
            to="/products"
            className="border rounded-full px-4 py-0.5 bg-customBrown text-white font-bold"
          >
            Ver productos
          </Link>
        </section>
      ) : (
        <section className="flex flex-col md:flex-row gap-20 lg:gap-44 justify-center ">
          <section className="flex flex-col gap-10">
            {cart.map((item) => {
              return <CartItemCard key={item.id} item={item} />;
            })}
          </section>

          <section className=" md:h-[130px] flex flex-col items-center gap-5 p-5 border border-black">
            <div>
              <p className="flex gap-2">
                Total a pagar:<span>${totalAmount()}</span>
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                to="/checkout"
                className="rounded-md px-3 bg-green-400 text-white font-bold"
              >
                Finalizar compra
              </Link>
              <button
                onClick={() => {
                  cartEmpty();
                  toast.success("Carrito eliminado");
                }}
                className="bg-slate-500 font-bold text-white rounded-md px-3"
              >
                Vaciar carrito
              </button>
            </div>
          </section>
        </section>
      )}
    </section>
  );
};
