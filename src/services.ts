import { supabase } from "./components/config/db";
import { type Orders, type Product } from "./components/types/type";

export async function getProducts(): Promise<Product[]> {
  try {
    const { data: products, error } = await supabase
      .from("products")
      .select("*");
    if (error) throw error;
    return products as Product[];
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { data: product, error } = await supabase
      .from("products")
      .select("*")
      .eq("id", id)
      .single();
    if (error) throw new Error("Error al obtener todos los productos");
    return product as Product;
  } catch (error) {
    console.error(error);
    return null;
  }
}

export async function submitOrder({
  order,
}: {
  order: Orders;
}): Promise<Orders | null> {
  try {
    const user = await supabase.auth.getUser();
    const user_id = user.data.user?.id;

    const { data, error } = await supabase
      .from("orders")
      .insert([
        {
          buyer: order.buyer,
          total: order.total,
          items: order.items,
          user_id,
        },
      ])
      .select();

    if (error) {
      console.error("Error de Supabase:", error.message, error.details);
      throw new Error("Error al guardar la compra");
    }
    return data ? data[0] : null;
  } catch (error) {
    console.error(error);
    return null;
  }
}
