import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services";
import { Product } from "../types/type";
import { useLoading } from "../hooks/useLoading";
import { LoadingWidget } from "../common/LoadingWidget";

export const ProductDetail = () => {
  const { id } = useParams();
  const { loading, loadingFalse, loadingTrue } = useLoading();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const getProduct = async () => {
      loadingTrue();
      try {
        if (id) {
          const res = await getProductById(id);
          setProduct(res || null);
        }
      } catch (error) {
        console.error(error);
      } finally {
        loadingFalse();
      }
    };
    getProduct();
  }, []);

  return (
    <section className="max-w-2xl mx-auto  bg-white dark:bg-zinc-800 shadow-md">
      {loading ? (
        <section className="min-h-screen flex items-center">
          <LoadingWidget text="Cargando producto..." />
        </section>
      ) : (
        <section className="flex items-center">
          <div className="w-full h-64 rounded-sm">
            <img
              src={product?.thumbnail}
              alt={product?.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h2 className="font-bold">{product?.title}</h2>
            <p className="">{product?.description}</p>
            <span className="text-xl font-semibold text-green-600">
              ${product?.price}
            </span>
            <button className="border">Añadir al carrito</button>
          </div>
        </section>
      )}
    </section>
  );
};
