import { MdOutlineEmail } from "react-icons/md";

export const EmailWidget = () => {
  return (
    <div>
      <a
        href="mailto:tierradenudos@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center border border-black rounded-full p-1 md:p-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black dark:border-white transition"
      >
        <MdOutlineEmail />
      </a>
    </div>
  );
};
