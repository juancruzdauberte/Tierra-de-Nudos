import { useParams } from "react-router-dom";
import { LoadingWidget } from "../common/LoadingWidget";
import { useCart } from "../context/CartContext";
import { useQuery } from "@tanstack/react-query";
import { Counter } from "../common/Counter";
import { useState } from "react";
import { getProductByIdQuery } from "../queryOptions/queryOptions";

export const ProductDetail = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState<number>(1);

  const { addProductToCart } = useCart();

  const { data: product, isLoading } = useQuery(
    getProductByIdQuery(id as string)
  );

  const onAdd = () => {
    if (!product) return;
    const productToCart = { ...product, quantity: counter };
    addProductToCart(productToCart);
    console.log(productToCart);
    setCounter(1);
  };

  return (
    <section>
      {isLoading ? (
        <section className="min-h-screen flex items-center">
          <LoadingWidget text="Cargando producto..." />
        </section>
      ) : !product ? (
        <p className="p-4 text-center text-red-500">Producto no encontrado.</p>
      ) : (
        <section className="max-w-4xl mx-auto p-4 bg-white dark:bg-zinc-800 rounded-2xl shadow-lg">
          <section className="flex flex-col md:flex-row gap-6 items-center">
            <div className="w-full md:w-1/2 aspect-square overflow-hidden rounded-xl bg-white flex items-center justify-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col gap-10 w-full md:w-1/2">
              <div>
                <h2 className="font-bold text-3xl text-zinc-800 dark:text-white">
                  {product.title}
                </h2>
                <p className="mt-2 text-zinc-600 dark:text-zinc-300 text-sm md:text-base">
                  {product.description}
                </p>
                <span className="block text-2xl font-semibold text-green-600 mt-4">
                  ${product.price}
                </span>
              </div>

              <Counter
                quantity={counter}
                stock={product.stock}
                onChangeQuantity={setCounter}
              />

              <button
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold px-4 py-3 mt-4 rounded-xl transition-colors"
                onClick={onAdd}
              >
                Añadir al carrito
              </button>
            </div>
          </section>
        </section>
      )}
    </section>
  );
};
