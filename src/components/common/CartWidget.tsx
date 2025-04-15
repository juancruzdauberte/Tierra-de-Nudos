import { PiShoppingCartThin } from "react-icons/pi";
import { useCart } from "../context/CartContext";

export const CartWidget = () => {
  const { totalItemsInCart } = useCart();

  return (
    <div>
      <span className="absolute top-1 md:top-2 lg:top-0 mx-5">
        {totalItemsInCart()}
      </span>
      <PiShoppingCartThin size={31} />
    </div>
  );
};
