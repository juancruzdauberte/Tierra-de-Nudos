import { IoIosRemove, IoIosAdd } from "react-icons/io";

interface CounterProps {
  quantity: number;
  stock: number;
  onChangeQuantity: (quantity: number) => void;
}

export const Counter = ({
  quantity,
  stock,
  onChangeQuantity,
}: CounterProps) => {
  const suma = () => {
    if (quantity < stock) {
      onChangeQuantity(quantity + 1);
    }
  };

  const resta = () => {
    if (quantity > 1) {
      onChangeQuantity(quantity - 1);
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
