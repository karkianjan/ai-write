import { Suspense } from "react";
// Assets
// Components
import Sidebar from "../organisms/Sidebar";
import Permissions from "@/Views/Permissions/Permissions";
const DashboardLayout = ({}) => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-1 flex-col ">
        <Permissions />
      </div>

      <div className="">
        <Suspense fallback={<h1>LOADING...</h1>} />
      </div>
    </div>
  );
};

export default DashboardLayout;
