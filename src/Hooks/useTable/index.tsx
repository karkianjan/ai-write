import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export interface Departments {
  id: string;
  departmentId: number;
  departmentName: string;
  jobs: string;
  actions: string;
}

const useDepartmentListTable = (_data: Departments[]) => {
  const columns = useMemo<ColumnDef<Departments>[]>(
    () => [
      {
        accessorKey: "departmentId",
        header: "DEPT ID",
        cell: ({ row }) => (
          <div className="capitalize">{row.getValue("departmentId")}</div>
        ),
      },
      {
        accessorKey: "departmentName",
        header: "Department Name",
        cell: ({ row }) => (
          <div className="capitalize text-base">
            {row.getValue("departmentName")}
          </div>
        ),
      },
      {
        id: "jobs",
        header: "Jobs",
        enableHiding: false,
        cell: () => (
          <div className="flex">
            <button className=" text-cyan-400 hover:text-cyan-300 font-semibold">
              Go To Job List
            </button>
          </div>
        ),
      },
      {
        id: "actions",
        header: "Action",
        enableHiding: false,
        cell: () => <div className="flex space-x-8"></div>,
      },
    ],
    []
  );

  return [columns];
};
export default useDepartmentListTable;
