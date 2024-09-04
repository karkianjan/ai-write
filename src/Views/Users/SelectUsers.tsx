"use client";

import React, { useEffect, useState, useRef } from "react";
import Checkbox from "@/components/ui/checkbox";

interface Option {
  id: number;
  value: string;
  label: string;
}

interface SelectUsersProps {
  onSelect: (selectedOptions: string[]) => void;
}

const SelectUsers: React.FC<SelectUsersProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchOptions = async () => {
      setOptions([
        { id: 1, value: "Paid", label: "Paid" },
        { id: 2, value: "Pending", label: "Pending" },
        { id: 3, value: "Lock", label: "Lock" },
      ]);
    };

    fetchOptions();
  }, []);

  const handleCheckboxChange = (value: string) => {
    setSelectedOptions((prevSelected) => {
      const newSelected = prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value];

      onSelect(newSelected);
      return newSelected;
    });
  };

  const handleSelectAll = () => {
    if (selectedOptions.length === options.length) {
      setSelectedOptions([]);
      onSelect([]);
    } else {
      const allOptions = options.map((option) => option.value);
      setSelectedOptions(allOptions);
      onSelect(allOptions);
    }
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
        className="flex items-center text-gray-700 border border-gray-200 bg-white rounded-md p-2 hover:border-none"
      >
        <div className="flex space-x-16">
          <span>{selectedOptions.length > 0 ? "All" : "All"}</span>
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
        <div className="absolute w-full bg-white border border-gray-300 rounded-md outline-none shadow-lg z-10">
          <label className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
            <Checkbox
              checked={selectedOptions.length === options.length}
              onCheckedChange={handleSelectAll}
              className="mr-2"
            />
            All
          </label>
          {options.map((option) => (
            <label
              key={option.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
            >
              <Checkbox
                checked={selectedOptions.includes(option.value)}
                onCheckedChange={() => handleCheckboxChange(option.value)}
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

export default SelectUsers;
