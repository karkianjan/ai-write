import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLInputElement> {
  labelText?: string;
  id: string;
  checked?: boolean;
}

const Checkbox = forwardRef<HTMLInputElement, Props>(
  ({ labelText, id, checked, ...props }, ref) => {
    return (
      <div className="flex cursor-pointer items-center">
        <input
          id={id}
          name="checkbox"
          type="checkbox"
          className="custom-checkbox hidden"
          checked={checked}
          {...props}
          ref={ref}
        />
        <label
          htmlFor={id}
          className="flex cursor-pointer items-center space-x-2.5"
        >
          {labelText && (
            <span className="text-sm  text-smallText">{labelText}</span>
          )}
          <span className="overflow-hidden rounded-[4px] border border-light">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 200 200"
              className="h-4 w-4"
            >
              <mask fill="white" id="path-1-inside-1_476_5-37">
                <rect height="200" width="200"></rect>
              </mask>
              <rect
                mask="url(#path-1-inside-1_476_5-37)"
                stroke-width="40"
                className="custom-checkbox-box"
                height="200"
                width="200"
              ></rect>
              <path
                stroke-width="15"
                d="M52 111.018L76.9867 136L149 64"
                className="custom-checkbox-tick"
              ></path>
            </svg>
          </span>
        </label>
      </div>
    );
  }
);

export default Checkbox;
