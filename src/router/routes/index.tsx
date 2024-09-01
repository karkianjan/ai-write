import { Route, Routes } from "react-router-dom";
import Plan from "@/Views/Plan/Plan";
import * as path from "./path";
import Users from "@/Views/Users/Users";
import DashboardLayout from "@/components/Layout/DashboardLayout";

function Router() {
  return (
    <>
      <Routes>
        <Route path={path.PARENT_ROUTE} element={<DashboardLayout />} />
        <Route path={path.PERMISSIONS} element={<DashboardLayout />} />
        <Route path={path.PLAN} element={<Plan />} />
        <Route path={path.USERS} element={<Users />} />
      </Routes>
    </>
  );
}

export default Router;
