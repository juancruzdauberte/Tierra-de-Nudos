import { queryOptions } from "@tanstack/react-query";
import { getProductById, getProducts } from "../../services";

export function getProductByIdQuery(id: string) {
  return queryOptions({
    queryKey: ["product", id],
    queryFn: async () => getProductById(id),
    enabled: !!id,
  });
}

export function getProductsQuery() {
  return queryOptions({
    queryKey: ["product"],
    queryFn: async () => getProducts(),
  });
}
