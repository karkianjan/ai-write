import NavbarHeader from "@/components/organisms/NavBar/NavbarHeader/NavbarHeader";

const PlanHeader = () => {
  return (
    <div className="top-0 z-10 flex w-full h-[88px] bg-gray-100 items-center justify-between  px-6 py-3.5 lg:gap-28">
      <h1 className="hidden shrink-0 text-2xl font-semibold text-dark lg:block">
        Plan
      </h1>
      <NavbarHeader />
    </div>
  );
};

export default PlanHeader;
