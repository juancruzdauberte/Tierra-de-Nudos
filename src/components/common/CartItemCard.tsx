import { useCart } from "../context/CartContext";
import { ProductInCart } from "../types/type";
import { Counter } from "./Counter";
import { CiCircleRemove } from "react-icons/ci";

type Props = {
  item: ProductInCart;
  onChangeQuantity: (id: string, quantity: number) => void;
};
export const CartItemCard = ({ item, onChangeQuantity }: Props) => {
  const { deleteProductToCart } = useCart();
  return (
    <section className="flex items-center gap-5">
      <div className="w-20 h-20">
        <img className="h-full w-auto" src={item.thumbnail} alt={item.title} />
      </div>

      <div>
        <h3>{item.title}</h3>
      </div>

      <div className="flex gap-3">
        <Counter
          quantity={item.quantity}
          stock={item.stock}
          onChangeQuantity={(newQuantity) =>
            onChangeQuantity(item.id, newQuantity)
          }
        />
        <span>${item.price}</span>
      </div>

      <button onClick={() => deleteProductToCart(item.id)}>
        <CiCircleRemove />
      </button>
    </section>
  );
};
