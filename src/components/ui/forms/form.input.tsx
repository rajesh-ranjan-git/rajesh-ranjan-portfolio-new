import { ChangeEvent, forwardRef } from "react";
import { FormInputProps } from "@/types/props/forms.props.types";

const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      className = "",
      startIcon,
      endIcon,
      error,
      numericOnly,
      maxDigits,
      ...props
    },
    ref,
  ) => {
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      let value = e.target.value;

      if (numericOnly) {
        value = value.replace(/\D/g, "");

        if (maxDigits) {
          value = value.slice(0, maxDigits);
        }

        e.currentTarget.value = value;
      }

      props.onChange?.(e);
    };

    return (
      <div className="relative w-full">
        {startIcon && (
          <div
            className={`top-1/2 left-4 absolute -translate-y-1/2 ${error ? "text-rose-600" : "text-fixed-secondary/30"}`}
          >
            {startIcon}
          </div>
        )}

        <input
          ref={ref}
          {...props}
          onChange={handleChange}
          className={`disabled:opacity-50 shadow-sm focus:shadow-md focus:shadow-accent-blue/50 focus:border-accent-blue/50 px-4 py-2.5 border border-fixed-secondary/30 rounded-xl outline-none w-full text-text-primary placeholder:text-text-muted text-base transition-all duration-300 disabled:cursor-not-allowed ${startIcon ? "pl-10" : ""} ${endIcon ? "pr-10" : ""} ${error ? "border-rose-600" : ""} ${className}`}
        />

        {endIcon && (
          <div
            className={`top-1/2 right-4 absolute -translate-y-1/2 ${error ? "text-rose-600" : "text-fixed-secondary/80"}`}
          >
            {endIcon}
          </div>
        )}
      </div>
    );
  },
);

export default FormInput;
