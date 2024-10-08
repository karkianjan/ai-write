import { Suspense } from "react";
// Assets
// Components
import Sidebar from "@/components/organisms/Sidebar";
// import { DataTable } from "./DataTable";
import UsersTable from "./UsersDataTable";
const Users = () => {
  return (
    <div className="flex ">
      <Sidebar />

      <div className="flex flex-1 flex-col ">
        {/* <DataTable /> */}
        <UsersTable />
      </div>

      <div className="">
        <Suspense fallback={<h1>LOADING...</h1>} />
      </div>
    </div>
  );
};

export default Users;
