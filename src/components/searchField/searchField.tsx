import React, { useState } from "react";
import { SearchInput } from "../atom/forms";
import { useLocation } from "react-router-dom";

interface HeaderProps {
  placeholder?: string;
}

const SearchButton = ({ placeholder = "Search..." }: HeaderProps) => {
  const location = useLocation();
  const isDashboard = location.pathname === "/";

  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    // You can add additional logic here, e.g., filtering items based on the search value
  };

  return (
    <div className="top-0 z-10 flex w-full items-center justify-between gap-8 bg-dashboard px-6 py-3.5 lg:gap-28">
      {(handleSearch || isDashboard) && (
        <div className="group relative flex-1 shrink-0">
          <SearchInput
            placeholder={isDashboard ? "Search Tools" : placeholder}
            value={searchValue}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.target.value;
              handleSearch(inputValue);
            }}
          />
          {searchValue !== "" && isDashboard && (
            <div>{/* Add content here if necessary */}</div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchButton;
