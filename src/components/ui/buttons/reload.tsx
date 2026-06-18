import { IoMdRefresh } from "react-icons/io";

const Reload = () => {
  return (
    <div className="flex justify-center items-center gap-4 w-full text-center">
      <button
        type="button"
        className="group flex items-center gap-2 px-4 py-2 border border-green-300 rounded-md bg-green-50 text-green-700 text-sm font-medium hover:bg-green-100 transition-colors cursor-pointer"
        onClick={() => {
          window.location.reload();
        }}
      >
        <IoMdRefresh size={20} className="group-hover:animate-spin" />
        <span className="font-medium">Reload</span>
      </button>
    </div>
  );
};

export default Reload;
