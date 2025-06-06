import { useEffect, useState } from "react";
import { type Filter } from "../types/type";
import { ProductCard } from "../common/ProductCard";
import { LoadingWidget } from "../common/LoadingWidget";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getProductsQuery } from "../queryOptions/queryOptions";

export const Products = () => {
  const { category } = useParams();

  const [filter, setFilter] = useState<Filter>({
    all: true,
    tapiz: false,
    colgante: false,
  });

  const { data: products, isLoading } = useQuery(getProductsQuery());

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

  const filteredProducts = (products ?? []).filter((product) => {
    if (filter.all) return true;
    return (
      (filter.tapiz && product.category === "tapiz") ||
      (filter.colgante && product.category === "colgante")
    );
  });

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
      {isLoading ? (
        <LoadingWidget text="Cargando productos..." />
      ) : (
        <section className="flex items-center flex-col lg:flex-row lg:items-start mt-20 mb-20 gap-24">
          <aside className="flex flex-col gap-3 p-3 rounded-lg bg-slate-100 shadow-md h-fit">
            <span className="text-lg font-semibold text-slate-700">
              Filtrar por categoría:
            </span>

            <div className="w-44 flex flex-col gap-4">
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

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 w-full">
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
