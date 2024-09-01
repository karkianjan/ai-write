import { Suspense } from "react";
// Assets
// Components
import Sidebar from "../organisms/Sidebar";
const DashboardLayout = ({}) => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-1 flex-col "></div>

      <div className="">
        <Suspense fallback={<h1>LOADING...</h1>} />
      </div>
    </div>
  );
};

export default DashboardLayout;
