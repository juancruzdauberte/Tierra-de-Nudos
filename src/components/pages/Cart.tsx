import { Link } from "react-router-dom";
import { CartItemCard } from "../common/CartItemCard";
import { useCart } from "../context/CartContext";

export const Cart = () => {
  const { cart, updateQuantity, totalAmount, cartEmpty } = useCart();
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
        <section className="flex flex-col items-center gap-20">
          <section className="flex flex-col gap-10">
            {cart.map((item) => {
              return (
                <CartItemCard
                  key={item.id}
                  item={item}
                  onChangeQuantity={(newQty) =>
                    updateQuantity(item.id, Number(newQty))
                  }
                />
              );
            })}
          </section>

          <section className="flex flex-col items-center gap-3">
            <div>
              <p className="flex gap-2">
                Total a pagar:<span>${totalAmount()}</span>
              </p>
            </div>
            <div className="flex gap-3">
              <Link to="/checkout" className="border rounded-md px-3">
                Finalizar compra
              </Link>
              <button onClick={cartEmpty} className="border rounded-md px-3">
                Vaciar carrito
              </button>
            </div>
          </section>
        </section>
      )}
    </section>
  );
};
