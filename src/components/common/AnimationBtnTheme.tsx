import { motion } from "framer-motion";
import { CiDark, CiLight } from "react-icons/ci";

export const AnimationBtnTheme = ({
  isOn,
  toggle,
}: {
  isOn: boolean;
  toggle: () => void;
}) => {
  return (
    <button
      onClick={toggle}
      className={`relative w-14 h-8 rounded-full p-1 flex items-center transition-colors duration-300 ${
        isOn
          ? "bg-gray-200 border border-gray-300"
          : " bg-gray-600 border border-gray-500"
      }`}
    >
      {/* Icono visible según el modo */}
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
          <CiLight className="text-yellow-400" size={18} />
        ) : (
          <CiDark className="text-gray-700" size={18} />
        )}
      </motion.div>

      {/* Fondo móvil */}
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
