import { InputHTMLAttributes, forwardRef } from "react";

interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  labelText?: string;
  onChange?: () => void;
}

const SwitchInput = forwardRef<HTMLInputElement, SwitchProps>(
  ({ ...props }, ref) => {
    return (
      <label className="toggle-switch">
        <input
          type="checkbox"
          {...props}
          className="toggle-checkbox hidden"
          ref={ref}
        />
        <div className="toggle-switch-background">
          <div className="toggle-switch-handle"></div>
        </div>
      </label>
    );
  }
);

export default SwitchInput;

SwitchInput.displayName = "SwitchInput";
