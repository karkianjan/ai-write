import { Suspense } from "react";
// Assets
// Components
import Sidebar from "@/components/organisms/Sidebar";
import PlanHeader from "./PlanHeader";
import PlanBody from "./PlanBody";
const Plan = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-1 flex-col ">
        <PlanHeader />
        <PlanBody />
      </div>

      <div className="">
        <Suspense fallback={<h1>LOADING...</h1>} />
      </div>
    </div>
  );
};

export default Plan;
