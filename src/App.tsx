import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/pages/Login";
import { NotFound } from "./components/pages/NotFound";
import { AuthProvider } from "./components/context/AuthContext";
import { ThemeProvider } from "./components/context/ThemeContext";
import { Home } from "./components/pages/Home";
import { Contact } from "./components/pages/Contact";
import { ProtectedRoutes } from "./components/config/ProtectedRoutes";
import { ProtectedLayout } from "./components/config/ProtectedLayout";
import { Products } from "./components/pages/Products";
import { Account } from "./components/pages/Account";
import { ProductDetail } from "./components/pages/ProductDetail";
import { CartProvider } from "./components/context/CartContext";

function App() {
  return (
    <section
      className="text-md md:text-xl text-black dark:text-white bg-cust
    omWhite dark:bg-customDark transition-colors duration-300"
    >
      <BrowserRouter>
        <AuthProvider>
          <ThemeProvider>
            <CartProvider>
              <Routes>
                <Route path="/" element={<Login />} />
                <Route path="*" element={<NotFound />} />
                <Route element={<ProtectedRoutes />}>
                  <Route element={<ProtectedLayout />}>
                    <Route path="/products" element={<Products />} />
                    <Route path="/products/:category?" element={<Products />} />
                    <Route path="/product/:id" element={<ProductDetail />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/account" element={<Account />} />
                  </Route>
                </Route>
              </Routes>
            </CartProvider>
          </ThemeProvider>
        </AuthProvider>
      </BrowserRouter>
    </section>
  );
}

export default App;
