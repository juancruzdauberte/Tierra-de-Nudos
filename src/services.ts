import { supabase } from "./components/config/db";
import { type Product } from "./components/types/type";

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
