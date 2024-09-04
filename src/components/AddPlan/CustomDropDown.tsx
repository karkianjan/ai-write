import React, { useEffect, useState, useRef } from "react";
import Checkbox from "../ui/checkbox";

interface Option {
  id: number;
  value: string;
  label: string;
}

const CustomDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      setOptions([
        { id: 1, value: "Features 1", label: "Features 1" },
        { id: 2, value: "Features 2", label: "Features 2" },
        { id: 3, value: "Features 3", label: "Features 3" },
        { id: 4, value: "Features 4", label: "Features 4" },
        { id: 5, value: "Features 5", label: "Features 5" },
        { id: 6, value: "Features 6", label: "Features 6" },
      ]);
    };

    fetchOptions();
  }, []);

  const handleCheckboxChange = (value: string, isChecked: boolean) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = isChecked
        ? [...prevSelected, value]
        : prevSelected.filter((item) => item !== value);

      return newSelected;
    });
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex text-gray-400 border border-gray-300 rounded-md p-2"
      >
        <div className="flex justify-between w-full">
          <span>
            {selectedOptions.length > 0
              ? selectedOptions.join(", ")
              : "Select features"}
          </span>
          <svg
            className={`w-5 h-5 transition-transform ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center p-2 hover:bg-gray-100 cursor-pointer"
            >
              <Checkbox
                checked={selectedOptions.includes(option.value)}
                onCheckedChange={(isChecked) =>
                  handleCheckboxChange(option.value, isChecked as boolean)
                }
                className="form-checkbox h-4 w-4 text-indigo-600"
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
