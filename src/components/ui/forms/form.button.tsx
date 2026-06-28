import { TbLoader3 } from "react-icons/tb";
import { FormButtonProps } from "@/types/props/forms.props.types";

const FormButton = ({
  variant = "secondary",
  size = "md",
  loading,
  children,
  className = "",
  disabled,
  ...props
}: FormButtonProps) => {
  const base =
    "inline-flex items-center justify-center gap-2 font-medium transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none";

  const sizes = {
    sm: "px-3 py-1.5 text-xs rounded-md",
    md: "px-5 py-2.5 text-sm rounded-md",
  };

  const variants = {
    primary:
      "hover:opacity-90 active:scale-[0.98] bg-fixed-dark text-fixed-light hover:bg-accent-blue cursor-pointer py-3 transition-all duration-300 ease-in-out",
    secondary:
      "active:scale-[0.98] bg-fixed-dark text-fixed-light hover:bg-accent-blue cursor-pointer py-3 transition-all duration-300 ease-in-out",
    ghost:
      "active:scale-[0.98] bg-fixed-dark text-fixed-light hover:bg-accent-blue cursor-pointer py-3 transition-all duration-300 ease-in-out",
    danger:
      "alert alert-error active:scale-[0.98] bg-fixed-dark text-fixed-light hover:bg-accent-blue cursor-pointer py-3 transition-all duration-300 ease-in-out",
  };

  return (
    <button
      {...props}
      disabled={disabled || loading}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {loading ? <TbLoader3 size={18} className="animate-spin" /> : null}
      {children}
    </button>
  );
};

export default FormButton;
