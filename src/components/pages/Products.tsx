import { useEffect, useState } from "react";
import { getProducts } from "../../services";
import { type Filter, type Product } from "../types/type";
import { ProductCard } from "../common/ProductCard";
import { useLoading } from "../hooks/useLoading";
import { LoadingWidget } from "../common/LoadingWidget";
import { useParams } from "react-router-dom";

export const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { loading, loadingFalse, loadingTrue } = useLoading();
  const { category } = useParams();

  const [filter, setFilter] = useState<Filter>({
    all: true,
    tapiz: false,
    colgante: false,
  });

  const handleOnChangeFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;

    if (value === "all") {
      setFilter({
        all: true,
        tapiz: false,
        colgante: false,
      });
    } else {
      const updatedFilter = {
        ...filter,
        all: false,
        [value]: checked,
      };
      if (!updatedFilter.tapiz && !updatedFilter.colgante) {
        updatedFilter.all = true;
      }

      setFilter(updatedFilter);
    }
  };

  const filteredProducts = products.filter((product) => {
    if (filter.all) return true;
    return (
      (filter.tapiz && product.category === "tapiz") ||
      (filter.colgante && product.category === "colgante")
    );
  });

  useEffect(() => {
    const fetchProducts = async () => {
      loadingTrue();
      try {
        const res = await getProducts();
        if (res) setProducts(res);
      } catch (error) {
        console.error(error);
      } finally {
        loadingFalse();
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    if (category === "tapiz") {
      setFilter({ all: false, tapiz: true, colgante: false });
    } else if (category === "colgante") {
      setFilter({ all: false, tapiz: false, colgante: true });
    } else {
      setFilter({ all: true, tapiz: false, colgante: false });
    }
  }, [category]);

  return (
    <section>
      {loading ? (
        <LoadingWidget text="Cargando productos..." />
      ) : (
        <section className="flex items-center flex-col lg:flex-row lg:items-start mt-20 mb-20 gap-20 lg:gap-20">
          <aside className="w-64  gap-4 p-4 rounded-lg bg-slate-100 shadow-md h-fit">
            <span className="text-lg font-semibold text-slate-700">
              Filtrar por categoría:
            </span>

            <div className="flex flex-col gap-4">
              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:bg-slate-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  value="all"
                  checked={filter.all}
                  onChange={handleOnChangeFilter}
                  className="accent-sky-600 w-4 h-4"
                />
                <span className="text-slate-700">Todos</span>
              </label>

              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:bg-slate-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  value="tapiz"
                  checked={filter.tapiz}
                  onChange={handleOnChangeFilter}
                  className="accent-sky-600 w-4 h-4"
                />
                <span className="text-slate-700">Tapices</span>
              </label>

              <label className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm hover:bg-slate-50 transition-all cursor-pointer">
                <input
                  type="checkbox"
                  value="colgante"
                  checked={filter.colgante}
                  onChange={handleOnChangeFilter}
                  className="accent-sky-600 w-4 h-4"
                />
                <span className="text-slate-700">Colgantes</span>
              </label>
            </div>
          </aside>

          {/* Grilla de productos */}
          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full">
            {filteredProducts.map((product) => (
              <div key={product.id}>
                <ProductCard product={product} />
              </div>
            ))}
          </section>
        </section>
      )}
    </section>
  );
};
