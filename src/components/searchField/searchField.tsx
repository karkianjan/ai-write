import React, { useState } from "react";
import { SearchInput } from "../atom/forms";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  placeholder?: string;
  onSearch: (value: string) => void;
}

const SearchButton = ({ placeholder = "Search...", onSearch }: HeaderProps) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    onSearch(value);
  };

  return (
    <div className="top-0 z-10 flex w-full items-center justify-between gap-8 bg-dashboard px-6 py-3.5 lg:gap-28">
      {isDashboard && (
        <div className="group relative flex-1 shrink-0">
          <SearchInput
            placeholder="Search Tools"
            value={searchValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.target.value;
              handleSearch(inputValue);
            }}
          />
        </div>
      )}

      {!isDashboard && (
        <div className="group relative flex-1 shrink-0">
          <SearchInput
            placeholder={placeholder}
            value={searchValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.target.value;
              handleSearch(inputValue);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default SearchButton;
