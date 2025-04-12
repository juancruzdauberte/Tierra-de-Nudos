import { useTheme } from "../context/ThemeContext";
import { AnimationBtnTheme } from "../common/AnimationBtnTheme";

export const BtnTheme = () => {
  const { toggleTheme, theme } = useTheme();

  return <AnimationBtnTheme isOn={theme === false} toggle={toggleTheme} />;
};
