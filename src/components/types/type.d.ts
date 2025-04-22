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

export interface UserMetadata {
  id: string;
  avatar_url: string;
  email: string;
  email_verified: boolean;
  full_name: string;
  name: string;
  picture: string;
}

export type User = Omit<UserMetadata, "avatar_url" | "name" | "email_verified">;

export interface AuthContextType {
  user: User | null;
  signInWithGoogle: () => Promise<void>;
  logOut: () => Promise<void>;
  signInWithMagicLink: (email: string) => Promise<void>;
  checkEmail: boolean;
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

export type Message = {
  full_name: string;
  email: string;
  message: string;
  userId: string;
};
