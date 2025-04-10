import { UserMetadata } from "@supabase/supabase-js";

export type Product = {
  title: string;
  thumbail: string;
  stock: string;
  price: number;
  description: string;
  category: string;
};

export type Buyer = {
  name: string;
  email: string;
  phone_number: string;
};

export type Cart = Product[];

export type Orders = {
  buyer: Buyer;
  items: Product[];
  total: number;
};

type User = UserMetadata;
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
}

export interface ThemeContextType {
  theme: boolean;

  toggleTheme: () => void;
}
