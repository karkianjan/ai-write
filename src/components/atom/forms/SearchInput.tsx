import Search from "../icons/search";
import { TextInput } from ".";
import { InputHTMLAttributes } from "react";

const SearchInput = ({
  onChange,
  placeholder,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className="flex h-10 items-center gap-2 rounded-lg border border-input bg-white px-3.5">
      <Search />
      <div className="w-full">
        <TextInput
          extraClass="border-none p-0 mt-0 focus:border-0 flex-1 w-full"
          placeholder={placeholder ?? "Search"}
          disableFocusStyles={true}
          onChange={onChange}
          {...props}
        />
      </div>
    </div>
  );
};

export default SearchInput;
