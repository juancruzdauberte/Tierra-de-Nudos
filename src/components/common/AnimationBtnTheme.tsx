import { motion } from "framer-motion";
import { CiDark, CiLight } from "react-icons/ci";

type Props = {
  isOn: boolean;
  toggle: () => void;
};

export const AnimationBtnTheme = ({ isOn, toggle }: Props) => {
  return (
    <button
      onClick={toggle}
      className={`relative w-14 h-7 p-1 rounded-full flex items-center transition-colors duration-300 ${
        isOn
          ? "bg-gray-200 border border-gray-300"
          : " bg-gray-600 border border-gray-500"
      }`}
    >
      <motion.div
        className="absolute w-6 h-6 flex items-center justify-center text-sm z-10"
        animate={{
          x: isOn ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      >
        {isOn ? (
          <CiDark className="text-gray-800" size={18} />
        ) : (
          <CiLight className="text-yellow-800" size={18} />
        )}
      </motion.div>

      <motion.div
        className="w-6 h-6 rounded-full bg-white shadow-md"
        animate={{
          x: isOn ? 24 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </button>
  );
};
