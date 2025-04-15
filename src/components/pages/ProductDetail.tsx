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
        <section className="max-w-2xl flex bg-white dark:bg-zinc-800 shadow-mdf">
          <div className="w-full h-64 rounded-sm">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col p-4">
            <h2 className="font-bold text-2xl mb-2">{product.title}</h2>
            <p className="mb-4">{product.description}</p>
            <span className="text-xl font-semibold text-green-600 mb-4">
              ${product.price}
            </span>

            <Counter
              quantity={counter}
              stock={product.stock}
              onChangeQuantity={setCounter}
            />

            <button
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
              onClick={onAdd}
            >
              Añadir al carrito
            </button>
          </div>
        </section>
      )}
    </section>
  );
};
