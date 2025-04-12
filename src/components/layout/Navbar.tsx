import { Link } from "react-router-dom";
import Modal from "react-modal";
import { useEffect, useState } from "react";
import { HiMiniBars3, HiXMark } from "react-icons/hi2";
import { useAuth } from "../context/AuthContext";
import { BtnTheme } from "./BtnTheme";

Modal.setAppElement("#root");

export const Navbar = () => {
  const { user, logOut } = useAuth();
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const openModal = (): void => setMenuOpen(true);
  const closeModal = (): void => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-40 p-2 transition-colors duration-300 ${
        scrolled
          ? "bg-white/0 dark:bg-black/0 backdrop-blur-md"
          : "bg-customFooterNav dark:bg-customDark"
      }`}
    >
      <nav className="flex items-center justify-between">
        {!menuOpen && (
          <button
            onClick={openModal}
            className="md:hidden text-2xl"
            aria-label="Abrir menú"
          >
            <HiMiniBars3 />
          </button>
        )}
        <Link to="/home">
          <h1 className="">Tierra de Nudos</h1>
        </Link>

        <section className="flex items-center gap-5">
          <ul className="hidden md:flex gap-5 items-center  ">
            <div className="relative group cursor-pointer">
              <Link to="/products">Productos</Link>
              <div className="absolute top-full  right-0  p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 z-50">
                <ul className="flex flex-col gap-3">
                  <li className="hover:underline">
                    <Link to="/products">Todos</Link>
                  </li>
                  <li className="hover:underline">
                    <Link to="/products/tapiz">Tapices</Link>
                  </li>
                  <li className="hover:underline">
                    <Link to="/products/colgante">Colgantes</Link>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/contact">Contacto</Link>
          </ul>

          <div className="relative group">
            <Link to="/account">
              <img
                src={user?.user_metadata?.avatar_url}
                alt="Avatar"
                className="w-10 h-10 rounded-full cursor-pointer"
              />
            </Link>

            <div className="absolute top-8 mt-2 right-0 w-48 p-4 bg-white dark:bg-zinc-900 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition duration-300 z-50">
              <ul className="flex flex-col gap-3">
                <li>
                  <p className="">Hola, {user?.user_metadata?.full_name} !</p>
                </li>
                <li>
                  <Link to="/account">Mi Cuenta</Link>
                </li>
                <li>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={logOut}
                  >
                    Cerrar sesión
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <BtnTheme />
        </section>
      </nav>
      <Modal
        isOpen={menuOpen}
        onRequestClose={closeModal}
        contentLabel="Menú móvil"
        className="z-60 text-black dark:text-white bg-white dark:bg-zinc-900 h-full absolute flex left-0 top-0 p-6 w-52 max-w-md mx-auto outline-none md:hidden"
        overlayClassName="z-50 inset-0 fixed inset-0 bg-black bg-opacity-50 flex md:hidden"
      >
        <button
          onClick={closeModal}
          className="absolute top-2 right-2 md:hidden text-2xl cursor-pointer"
          aria-label="Abrir menú"
        >
          <HiXMark />
        </button>
        <ul className="flex flex-col items-start gap-4 text-center text-xl">
          <li>
            <Link to="/products" onClick={closeModal}>
              Productos
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeModal}>
              Contacto
            </Link>
          </li>
          <li>
            <Link to="/account" onClick={closeModal}>
              Mi Cuenta
            </Link>
          </li>
        </ul>
      </Modal>
    </header>
  );
};
