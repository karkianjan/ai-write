import { forwardRef, type InputHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { classNames } from "@/utils/ClassNames";

interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  extraClass?: string;
  error?: string;
  disableFocusStyles?: boolean;
  labelClass?: string;
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      label,
      type = "text",
      extraClass,
      error,
      disableFocusStyles,
      labelClass,

      ...props
    },
    ref
  ) => {
    return (
      <label className={twMerge("text-mediumText", labelClass)}>
        {label}

        <input
          {...props}
          ref={ref}
          type={type}
          className={twMerge(
            classNames(
              "mt-3 block rounded-lg border border-input px-3.5 py-2.5 placeholder:text-smallText focus:outline-0",
              error != null ? "border-red-600" : "border-input",
              !disableFocusStyles && "focus:border-primary focus:shadow-input "
            ),
            extraClass
          )}
        />

        {error != null && (
          <span className="mt-1.5 block text-sm text-red-600">{error}</span>
        )}
      </label>
    );
  }
);

export default TextInput;
