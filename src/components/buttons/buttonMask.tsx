import buttonStyles from "@/animations/button.module.css";
import { ButtonProps } from "@/types/propTypes";

const ButtonMask1 = (props: ButtonProps) => {
  return (
    <div className="relative bg-white hover:shadow-md rounded-md overflow-hidden font-semibold text-xl active:scale-95 duration-500">
      <span className="absolute flex justify-center items-center m-auto rounded-md w-full h-full overflow-hidden font-semibold text-[#3f82d9] text-xl text-center">
        {props.btnText}
      </span>
      <button
        className={`bg-[#3f82d9] p-4 px-6 border-none w-full h-full text-white cursor-pointer mask-no-repeat ${buttonStyles.btn_mask_1}`}
      >
        {props.btnText}
      </button>
    </div>
  );
};

const ButtonMask2 = (props: ButtonProps) => {
  return (
    <div className="relative bg-white hover:shadow-md rounded-md overflow-hidden font-semibold text-xl active:scale-95 duration-500">
      <span className="absolute flex justify-center items-center m-auto rounded-md w-full h-full overflow-hidden font-semibold text-[#000] text-xl text-center">
        {props.btnText}
      </span>
      <button
        className={`bg-[#000] p-4 px-6 border-none w-full h-full text-white cursor-pointer mask-no-repeat ${buttonStyles.btn_mask_2}`}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export { ButtonMask1, ButtonMask2 };
