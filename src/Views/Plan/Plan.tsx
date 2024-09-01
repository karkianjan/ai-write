import { Suspense } from "react";
// Assets
// Components
import Sidebar from "@/components/organisms/Sidebar";
import NavbarHeader from "@/components/organisms/NavBar/NavbarHeader/NavbarHeader";
import DashoardBody from "@/Views/Dashboard/DashboardBody";
const Plan = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-1 flex-col ">
        <NavbarHeader />
        <DashoardBody />
      </div>

      <div className="">
        <Suspense fallback={<h1>LOADING...</h1>} />
      </div>
    </div>
  );
};

export default Plan;
