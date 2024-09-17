import { useState } from "react";
import UserHeader from "./UsersHeader";
import { Button } from "@/components/ui/button";
import Download from "@/components/atom/icons/download";
import { DataTable } from "@/organism/Table";
import { UseUsersListTable } from "@/Hooks/Table/UseUserListTable";
import { mockData } from "./MockData";
export type Payment = {
  id: string;
  name: string;
  serialNumber: number;
  email: string;
  monthlyFee: string | number;
  expiryDate: string;
  status: "All" | "Paid" | "Pending" | "Lock";
};

const Users = () => {
  const [page, setPage] = useState(1);
  const [data] = useState<Payment[]>(mockData);
  const [columns] = UseUsersListTable(data);
  const itemsPerPage = 5;

  const paginatedData = data.slice(
    (page - 1) * itemsPerPage,
    Math.min(page * itemsPerPage, data.length)
  );

  const handleSelectUsers = (selectedOptions: string[]) => {
    // Implement filtering logic based on selectedOptions
    console.log("Selected users:", selectedOptions);
  };

  const handleSearch = (query: string) => {
    // Implement search logic
    console.log("Search query:", query);
  };

  const handlePageChange = (pageNumber: number) => {
    setPage(pageNumber);
  };

  return (
    <div className="flex flex-col">
      <UserHeader onSelect={handleSelectUsers} onSearch={handleSearch} />
      <div className=" m-10 2xl:m-20 bg-customLightGray border rounded-md h-full">
        <div className="flex justify-between py-6">
          <div className="flex flex-col">
            <div className="pl-10 h-6 text-2xl font-semibold text-dark flex flex-row space-x-3">
              <h1>User Details</h1>
              <span className="w-fit rounded-md bg-customGreen bg-opacity-10 px-2.5 py-0.5 text-sm">
                {paginatedData.length} users
              </span>
            </div>
            <div className="pl-10 pt-2 text-sm text-customGray font-thin">
              Keep track of users and manage them
            </div>
          </div>

          <div className="pr-7">
            <Button
              variant="outline"
              className="hover:border-none hover:bg-none w-fit mr-2.5"
            >
              <span className="flex justify-between items-center space-x-2">
                <Download />
                <p>Export</p>
              </span>
            </Button>
          </div>
        </div>
        <div className="px-10 py-4">
          <DataTable
            data={paginatedData}
            columns={columns}
            itemsPerPage={itemsPerPage}
            totalDataLength={data.length}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Users;
