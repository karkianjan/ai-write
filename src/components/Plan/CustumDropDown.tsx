import React, { useEffect, useState } from "react";

interface Option {
  id: number;
  value: string;
  label: string;
}

const CustomDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

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

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="block w-full border border-gray-300 rounded-md p-2"
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
              className="flex items-center p-2 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedOptions.includes(option.value)}
                onChange={() => handleCheckboxChange(option.value)}
                className="mr-2"
              />
              {option.label}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
