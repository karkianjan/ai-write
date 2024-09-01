import * as path from "./path";
import DashboardLayout from "@/components/Layout/DashboardLayout";
import { Route, Routes } from "react-router-dom";

function Router() {
  return (
    <>
      <Routes>
        <Route index element={"/Permissions"} />
        <Route path={path.PLAN} element={<DashboardLayout />} />
        <Route path={path.USERS} element={"/"} />
      </Routes>
    </>
  );
}
