import { BsSun, BsMoon } from "react-icons/bs";
import { themeConfig } from "@/config/common.config";
import { useAppStore } from "@/store/store";

const ThemeToggle = () => {
  const activeTheme = useAppStore((state) => state.activeTheme);
  const setActiveTheme = useAppStore((state) => state.setActiveTheme);

  const handleSwitchTheme = () => {
    if (activeTheme === themeConfig.dark) {
      setActiveTheme(themeConfig.light);
    } else {
      setActiveTheme(themeConfig.dark);
    }
  };

  return (
    <button
      onClick={handleSwitchTheme}
      className="flex justify-center items-center bg-white hover:bg-blue-50 border border-gray-200 hover:border-blue-400 rounded-full w-8 h-8 text-gray-500 hover:text-blue-600 transition-colors cursor-pointer"
      aria-label="Toggle theme"
    >
      {activeTheme === themeConfig.dark ? (
        <BsSun size={16} />
      ) : (
        <BsMoon size={16} />
      )}
    </button>
  );
};

export default ThemeToggle;
