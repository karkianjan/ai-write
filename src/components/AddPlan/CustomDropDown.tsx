import React, { useEffect, useState, useRef } from "react";
import Checkbox from "../ui/checkbox";
import Close from "../atom/icons/close";
import { DropDown } from "../atom/icons/dropDown";

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
  const handleRemoveFeature = (value: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.filter((item) => item !== value)
    );
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex text-gray-500 border  border-gray-300 rounded-md p-2 hover:border-gray-300"
      >
        <div className="flex justify-between w-full text-sm">
          <span>
            {selectedOptions.length > 0 ? "Select features" : "Select features"}
          </span>
          <span>
            <DropDown />
          </span>
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
                className=" h-4 w-4 "
              />
              <span className="ml-2 text-gray-700">{option.label}</span>
            </label>
          ))}
        </div>
      )}
      <div className="mt-3 flex flex-col w-fit gap-3 ">
        {selectedOptions.length > 0 ? (
          <div>
            <ul className="  text-gray-800 flex text-sm font-semibold w-fit items-center flex-wrap gap-3">
              {selectedOptions.map((option) => (
                <li
                  key={option}
                  className=" list-none rounded-lg border-gray-700 flex h-8 border w-28  items-center  justify-between px-2 "
                >
                  {option}
                  <button
                    onClick={() => handleRemoveFeature(option)}
                    className="hover:border-red-800 active:bg-red-800"
                  >
                    <Close />
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p></p>
        )}
      </div>
    </div>
  );
};

export default CustomDropdown;
