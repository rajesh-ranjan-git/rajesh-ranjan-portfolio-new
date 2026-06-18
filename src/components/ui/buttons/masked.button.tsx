import buttonStyles from "@/animations/button.module.css";
import { ButtonProps } from "@/types/props/common.props.types";

const MaskedButton = (props: ButtonProps) => {
  return (
    <div className="relative hover:shadow-md rounded-xl overflow-hidden font-semibold active:scale-95 duration-500">
      <span
        style={{ borderColor: props.color, color: props.color }}
        className={`absolute flex bg-white border-2 justify-center items-center m-auto rounded-xl w-full h-full overflow-hidden text-center uppercase ${props.btnTextSize ? `text-${props.btnTextSize}` : `text-sm`} ${props.className}`}
      >
        {props.btnText}
      </span>
      <button
        style={{ backgroundColor: props.color, borderColor: props.color }}
        className={`p-4 md:px-6 border-2 w-full h-full text-white cursor-pointer mask-no-repeat uppercase ${props.btnTextSize ? `text-${props.btnTextSize}` : `text-sm`} ${props.variant === "mask-1" ? buttonStyles.btn_mask_1 : buttonStyles.btn_mask_2} ${props.className}`}
      >
        {props.btnText}
      </button>
    </div>
  );
};

export default MaskedButton;
