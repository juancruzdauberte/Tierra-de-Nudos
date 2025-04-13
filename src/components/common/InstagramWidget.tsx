import { FaInstagram } from "react-icons/fa";

export const InstagramWidget = () => {
  return (
    <div>
      <a
        href="https://www.instagram.com/tierradenudos_/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center border border-black rounded-full p-1 md:p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white transition"
      >
        <FaInstagram />
      </a>
    </div>
  );
};
