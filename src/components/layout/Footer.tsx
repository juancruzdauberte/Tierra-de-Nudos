import { AiFillTikTok } from "react-icons/ai";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row gap-3 items-center justify-between  bg-customFooterNav dark:bg-customDark py-3 px-4">
      <section>
        <span className="font-bold">© Juan Cruz Dauberte</span>
      </section>

      <section>
        <ul className="flex flex-col gap-3 items-center">
          <Link to="/products">Productos</Link>
          <Link to="/contact">Contacto</Link>
        </ul>
      </section>

      <section className="flex gap-2">
        <a
          href="https://www.tiktok.com/@tierradenudos"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-black rounded-full p-1 md:p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white transition"
        >
          <AiFillTikTok />
        </a>

        <a
          href="https://www.instagram.com/tierradenudos_/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-black rounded-full p-1 md:p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white transition"
        >
          <FaInstagram />
        </a>
        <a
          href="mailto:tierradenudos@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center border border-black rounded-full p-1 md:p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white transition"
        >
          <MdOutlineEmail />
        </a>
      </section>
    </footer>
  );
};
