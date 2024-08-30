import React, { useEffect, useState } from "react";
import { useRef } from "react";

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
        { id: 1, value: "Features 1", label: "Features  1" },
        { id: 2, value: "Features 2", label: "Features  2" },
        { id: 3, value: "Features 3", label: "Features  3" },
        { id: 4, value: "Features 4", label: "Features  4" },
        { id: 5, value: "Features 5", label: "Features  5" },
        { id: 6, value: "Features 6", label: "Features  6" },
      ]);
    };

    fetchOptions();
  }, []);

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
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
        onClick={(e) => {
          e.preventDefault();
          setIsOpen(!isOpen);
        }}
        className=" w-full flex text-gray-400 border border-gray-300 rounded-md p-2"
      >
        {selectedOptions.length > 0
          ? selectedOptions.join(", ")
          : "Select to features"}
      </button>

      {isOpen && (
        <div className="absolute mt-1 w-full bg-white border border-gray-300 rounded-md shadow-lg">
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center p-2 cursor-pointer "
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                className="mr-2 bg-customGreen"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}

      {selectedOptions.length > 0 && (
        <div className="mt-1 p-1 ">
          <ul className=" grid grid-cols-3">
            {selectedOptions.map((option, index) => (
              <li
                className="mt-2 p-2 border border-gray-300 rounded-md list-none flex w-fit "
                key={index}
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
