import { useSidebarStore } from "@/store/store";

const Hamburger = () => {
  const sidebarToggle = useSidebarStore((state) => state.sidebarToggle);

  return (
    <div className="relative w-full h-full">
      <span
        className="top-0 left-0 absolute bg-white rounded-md w-full h-1 transition-all duration-300 ease-in-out"
        style={
          sidebarToggle
            ? {
                top: "50%",
                transform: "translate(0, -50%) rotate(45deg)",
              }
            : {
                top: "0%",
                transform: "none",
              }
        }
      ></span>
      <span
        className={`top-[50%] left-0 absolute bg-white rounded-md w-[80%] h-1 transition-all translate-y-[-50%] duration-300 ease-in-out ${
          sidebarToggle && "w-0 opacity-0"
        }`}
      ></span>
      <span
        className="top-[100%] left-0 absolute bg-white rounded-md w-full h-1 transition-all translate-y-[-100%] duration-300 ease-in-out"
        style={
          sidebarToggle
            ? {
                top: "50%",
                transform: "translate(0, 50%) rotate(-45deg)",
              }
            : {
                top: "100%",
                transform: "none",
              }
        }
      ></span>
    </div>
  );
};

export default Hamburger;
