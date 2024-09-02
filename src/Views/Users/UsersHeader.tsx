import NavbarHeader from "@/components/organisms/NavBar/NavbarHeader/NavbarHeader";
import SearchButton from "@/components/searchField/searchField";
import SelectUsers from "./SelectUsers";

const UserHeader = ({ onSelect }) => {
  return (
    <div className=" z-10 flex w-full h-[88px] bg-gray-100 items-center  justify-between px-6 py-3.5 ">
      <h1 className="hidden  text-2xl font-semibold text-dark lg:block">
        User Details
      </h1>
      <span className="w-fit flex-1">
        <SearchButton />
      </span>

      <span className="flex justify-end ">
        <SelectUsers onSelect={onSelect} />
      </span>

      <div className="flex items-center justify-end ">
        <NavbarHeader />
      </div>
    </div>
  );
};

export default UserHeader;
