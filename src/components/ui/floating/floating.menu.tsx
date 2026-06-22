import ThemeToggle from "../../theme/theme.toggle";
import MenuButton from "../buttons/menu.button";

const FloatingMenu = () => {
  return (
    <div className="top-4 right-4 z-100 fixed flex items-center gap-2 py-2">
      <ThemeToggle />

      <div className="md:hidden">
        <MenuButton />
      </div>
    </div>
  );
};

export default FloatingMenu;
