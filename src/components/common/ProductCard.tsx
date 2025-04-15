import { Link } from "react-router-dom";
import { type Product } from "../types/type";

type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  return (
    <section className="w-64 bg-white dark:bg-zinc-900 rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-transform duration-300 hover:scale-105">
      <div className="h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-56">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white truncate">
            {product.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col gap-2 mt-4">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="text-sm text-center bg-black text-white py-2 rounded-lg hover:bg-zinc-800 transition-colors duration-200"
          >
            Ver más detalle
          </Link>
        </div>
      </div>
    </section>
  );
};
