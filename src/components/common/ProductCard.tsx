import { Link } from "react-router-dom";
import { type Product } from "../types/type";

type Props = {
  product: Product;
};
export const ProductCard = ({ product }: Props) => {
  return (
    <section className="bg-white dark:bg-zinc-900 rounded-sm shadow-md overflow-hidden hover:shadow-xl w-[250px] lg:w-[230px]">
      <div className="h-48 overflow-hidden">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-125"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-52">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {product.title}
          </h3>
          <p className="text-sm text-zinc-600 dark:text-zinc-300">
            {product.description}
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-lg font-bold text-green-600">
            ${product.price}
          </span>
          <Link
            to={`/product/${product.id}`}
            className="text-center self-center text-sm bg-black text-white py-1 w-36 rounded-lg hover:bg-zinc-800 transition-colors duration-200 mt-2"
          >
            Ver más detalle
          </Link>
        </div>
      </div>
    </section>
  );
};
