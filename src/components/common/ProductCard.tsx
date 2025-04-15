import { Link } from "react-router-dom";
import { type Product } from "../types/type";

type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  return (
    <section className="w-60 bg-white dark:bg-zinc-800 rounded-md shadow-md overflow-hidden transition transform hover:scale-[1.02] hover:shadow-lg">
      <div className="h-48 w-full overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white truncate">
          {product.title}
        </h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-300 line-clamp-2">
          {product.description}
        </p>
        <span className="text-base font-bold text-green-600">
          ${product.price}
        </span>
        <Link
          to={`/product/${product.id}`}
          className="text-center mt-4 mb-2 hover:underline"
        >
          Ver más detalle
        </Link>
      </div>
    </section>
  );
};
