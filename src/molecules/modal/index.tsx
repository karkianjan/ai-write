import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Departments {
  id: string;
  departmentId: number;
  departmentName: string;
  jobs: string;
  actions: string;
}
const mockData: Departments[] = [
  {
    id: "1",
    departmentId: 1,
    departmentName: "Frontend",
    jobs: "GO To Job List",
    actions: "boolean",
  },
  {
    id: "2",
    departmentId: 2,
    departmentName: "Backend",
    jobs: "GO To Job List",
    actions: "boolean",
  },
  {
    id: "3",
    departmentId: 3,
    departmentName: "Frontend",
    jobs: "GO To Job List",
    actions: "boolean",
  },
];

function DepartmentListTable() {
  const [DepartmentsData, _setDepartmentsData] =
    useState<Departments[]>(mockData);
  const [page, setPage] = useState(1);

  const itemsPerPage = 5;
  const paginatedData = DepartmentsData.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  );
  const totalMembers = DepartmentsData.length;

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className="pb-5">
      <div className="flex  justify-between m-4">
        <h1 className="font-semibold text-lg">Departments</h1>
        <Input type="text" placeholder="Search" />
      </div>
      {/* <data
        data={paginatedData}
        columns={columns}
        itemsPerPage={itemsPerPage}
        totalDataLength={totalMembers}
        handlePageChange={handlePageChange}
      /> */}
    </div>
  );
}

export default DepartmentListTable;
