import { useCart } from "../context/CartContext";
import { ProductInCart } from "../types/type";
import { Counter } from "./Counter";
import { CiCircleRemove } from "react-icons/ci";

type Props = {
  item: ProductInCart;
  isCheckout?: boolean;
};
export const CartItemCard = ({ item, isCheckout = false }: Props) => {
  const { deleteProductToCart, updateQuantity } = useCart();
  return (
    <section className="flex items-center justify-between gap-2 md:gap-5 border border-slate-300 dark:border-slate-500 p-2 rounded-sm w-[280px] sm:w-[320px] md:w-[380px] lg:w-[450px]">
      <div className="h-14 w-16 md:h-16 md:w-20">
        <img
          className="h-full w-full object-cover"
          src={item.thumbnail}
          alt={item.title}
        />
      </div>

      <div>
        <span className="font-semibold">Titulo</span>
        <h3>{item.title}</h3>
      </div>

      {isCheckout ? (
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center">
            <span className="font-semibold">Cant</span>
            <span>{item.quantity}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Precio</span>
            <span>{item.price}</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="font-semibold">Subtotal</span>
            <span>{item.price * item.quantity}</span>
          </div>
        </div>
      ) : (
        <div className="flex items-center gap-5">
          <div className="flex flex-col">
            <span className="font-semibold">Cant</span>
            <Counter
              quantity={item.quantity}
              stock={item.stock}
              onChangeQuantity={(newQuantity) => {
                updateQuantity(item.id, newQuantity);
              }}
            />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold">Precio</span>
            <span>${item.price}</span>
          </div>
        </div>
      )}
      {!isCheckout && (
        <button
          onClick={() => deleteProductToCart(item.id)}
          className=" hover:text-red-500 transition-colors"
        >
          <CiCircleRemove size={23} />
        </button>
      )}
    </section>
  );
};
