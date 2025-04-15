import { UserMetadata } from "@supabase/supabase-js";

export type Product = {
  id: string;
  title: string;
  thumbnail: string;
  stock: number;
  price: number;
  description: string;
  category: string;
};

export type ProductInCart = Product & { quantity: number };

export type Buyer = {
  name: string;
  email: string;
  address: string;
  province: string;
  cellphone: string;
  zipcode: string;
};

export type Orders = {
  buyer: Buyer;
  items: Product[];
  total: number;
  user_id: string;
};

export type Cart = Product[];

type User = UserMetadata;

export interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
}

export interface CartContextType {
  cart: ProductInCart[];
  addProductToCart: (product: ProductInCart) => void;
  cartEmpty: () => void;
  deleteProductToCart: (id: string) => void;
  totalAmount: () => number;
  totalItemsInCart: () => number;
  updateQuantity: (id: string, newQty: number) => void;
}

export interface ThemeContextType {
  theme: boolean;

  toggleTheme: () => void;
}

export type Filter = {
  all: boolean;
  tapiz: boolean;
  colgante: boolean;
};

export type Category = "all" | "tapiz" | "colgante";
