import { useCart } from "../context/CartContext";
import { ProductInCart } from "../types/type";
import { Counter } from "./Counter";
import { CiCircleRemove } from "react-icons/ci";

type Props = {
  item: ProductInCart;
};
export const CartItemCard = ({ item }: Props) => {
  const { deleteProductToCart, updateQuantity } = useCart();
  return (
    <section className="w-[280px] md:w-[400px] flex items-center justify-between gap-2 p-2 border  border-black">
      <div className="h-16 w-20 md:h-24 md:w-20">
        <img className="w-full h-full" src={item.thumbnail} alt={item.title} />
      </div>

      <div>
        <h3>{item.title}</h3>
      </div>

      <div className="flex gap-3 md:gap-5 items-center">
        <Counter
          quantity={item.quantity}
          stock={item.stock}
          onChangeQuantity={(newQuantity) => {
            updateQuantity(item.id, newQuantity);
          }}
        />
        <span>${item.price}</span>
      </div>

      <button
        onClick={() => deleteProductToCart(item.id)}
        className=" hover:text-red-500 transition-colors"
      >
        <CiCircleRemove size={23} />
      </button>
    </section>
  );
};
