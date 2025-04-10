import { CiDark } from "react-icons/ci";
import { useTheme } from "../context/ThemeContext";
import { CiLight } from "react-icons/ci";

export const BtnTheme = () => {
  const { toggleTheme, theme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="border rounded-full p-2 hover:bg-black hover:text-white border-black  dark:border-white dark:hover:bg-white dark:hover:text-black"
    >
      {theme ? <CiLight /> : <CiDark />}
    </button>
  );
};
