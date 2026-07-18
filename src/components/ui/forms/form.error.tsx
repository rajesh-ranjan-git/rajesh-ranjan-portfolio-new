import { motion, AnimatePresence } from "motion/react";
import { FormErrorMessageProps } from "@/types/props/forms.props.types";

const FormErrorMessage = ({ error, className }: FormErrorMessageProps) => {
  return (
    <AnimatePresence>
      {error && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className={`ml-2 my-0.5 overflow-hidden text-error text-xs origin-top ${className}`}
        >
          {error}
        </motion.p>
      )}
    </AnimatePresence>
  );
};

export default FormErrorMessage;
