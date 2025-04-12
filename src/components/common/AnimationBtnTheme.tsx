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
      className={`w-14 h-8 rounded-full p-1 flex items-center transition-colors duration-300 ${
        isOn ? "bg-gray-300" : "bg-gray-600"
      }`}
    >
      <motion.div
        className="w-6 h-6 rounded-full bg-white shadow-md"
        animate={{
          x: isOn ? "0%" : "100%",
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 25,
        }}
      />

      {isOn ? (
        <div className="absolute right-3">
          <CiDark />
        </div>
      ) : (
        <div className="absolute">
          <CiLight />
        </div>
      )}
    </button>
  );
};
