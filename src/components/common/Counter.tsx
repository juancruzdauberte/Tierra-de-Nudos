import { IoIosRemove, IoIosAdd } from "react-icons/io";
import { useCart } from "../context/CartContext";

interface Props {
  quantity: number;
  stock: number;
  onChangeQuantity: (
    quantity: number,
    updateQuantity: (id: string, quantity: number) => void
  ) => void;
}

export const Counter = ({ quantity, stock, onChangeQuantity }: Props) => {
  const { updateQuantity } = useCart();
  const suma = () => {
    if (quantity < stock) {
      onChangeQuantity(quantity + 1, updateQuantity);
    }
  };

  const resta = () => {
    if (quantity > 1) {
      onChangeQuantity(quantity - 1, updateQuantity);
    }
  };

  return (
    <section className="flex gap-2 items-center">
      <button onClick={resta}>
        <IoIosRemove size={24} />
      </button>
      <span className="text-lg">{quantity}</span>
      <button onClick={suma}>
        <IoIosAdd size={24} />
      </button>
    </section>
  );
};
