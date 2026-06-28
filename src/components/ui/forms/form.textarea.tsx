import { forwardRef } from "react";
import { FormTextareaProps } from "@/types/props/forms.props.types";

const FormTextarea = forwardRef<HTMLTextAreaElement, FormTextareaProps>(
  ({ className = "", error, ...props }, ref) => (
    <div className="w-full">
      <textarea
        ref={ref}
        {...props}
        className={`bg-glass-bg-subtle focus:bg-glass-bg disabled:opacity-50 shadow-sm focus:shadow-md focus:shadow-accent-blue/50 backdrop-blur-glass-blur-light px-4 py-2.5 -mb-2 border border-fixed-secondary/30 focus:border-accent-blue/50 rounded-xl outline-none w-full text-text-primary placeholder:text-text-muted text-base transition-all duration-150 resize-none disabled:cursor-not-allowed ${error ? "border-rose-600" : ""} ${className}`}
      />
    </div>
  ),
);

export default FormTextarea;
