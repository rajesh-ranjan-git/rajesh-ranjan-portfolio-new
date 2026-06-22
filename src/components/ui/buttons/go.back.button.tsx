import { useRouter } from "next/navigation";
import { LuArrowLeft } from "react-icons/lu";

const GoBackButton = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center gap-4 w-full text-center">
      <button
        type="button"
        className="group flex items-center gap-2 bg-amber-50 hover:bg-amber-100 px-4 py-2 border border-amber-300 rounded-md font-medium text-amber-700 text-sm transition-colors cursor-pointer"
        onClick={() => router.back()}
      >
        <LuArrowLeft
          size={20}
          className="transition-transform group-hover:-translate-x-1"
        />
        <span className="font-medium">Go Back</span>
      </button>
    </div>
  );
};

export default GoBackButton;
