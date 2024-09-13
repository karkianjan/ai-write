import { useState } from "react";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Button } from "@/components/ui/button";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Download from "@/components/atom/icons/download";
import UserHeader from "./UsersHeader";
import Close from "@/components/atom/icons/close";
import UsersTablePagination from "./TablePagination";
import { CurdPopup } from "./CurdPopup";

export type Payment = {
  id: string;
  name: string;
  serialNumber: number;
  email: string;
  monthlyFee: number;
  expiryDate: string;
  status: "All" | "Paid" | "Pending" | "Lock";
};

const data: Payment[] = [
  {
    id: "0",
    name: "Tshiring Dorje Sherpa",
    serialNumber: 1,
    email: "Tshiring@gmail.com",
    monthlyFee: 15,
    expiryDate: "2024-12-01",
    status: "Paid",
  },
  {
    id: "1",
    name: "Dip Roshan Rai",
    serialNumber: 2,
    email: "dip@gmail.com",
    monthlyFee: 20,
    expiryDate: "2024-11-15",
    status: "Pending",
  },
  {
    id: "2",
    name: "Ashmita Chimoriya",
    serialNumber: 3,
    email: "Ahmita44@gmail.com",
    monthlyFee: 20,
    expiryDate: "2024-10-01",
    status: "Lock",
  },
  {
    id: "3",
    name: "Nelson Katwal",
    serialNumber: 4,
    email: "Nelson@gmail.com",
    monthlyFee: 20,
    expiryDate: "2024-09-30",
    status: "Paid",
  },
  {
    id: "4",
    name: "Rabin Gurung",
    serialNumber: 5,
    email: "Rabin@hotmail.com",
    monthlyFee: 20,
    expiryDate: "2024-08-20",
    status: "Pending",
  },
];

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "serialNumber",
    header: "S.N",
    cell: ({ row }) => <div>{row.getValue("serialNumber")}</div>,
  },
  {
    accessorKey: "name",
    header: "NAME",
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        EMAIL
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "monthlyFee",
    header: () => <div className="">MONTHLY FEE</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("monthlyFee"));

      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="font-medium ">{formatted}</div>;
    },
  },
  {
    accessorKey: "expiryDate",
    header: "EXPIRY DATE",
    cell: ({ row }) => <div>{row.getValue("expiryDate")}</div>,
  },
  {
    accessorKey: "status",
    header: "STATUS",
    cell: ({ row }) => {
      const status = row.getValue("status");
      const statusStyles: { [key: string]: string } = {
        Paid: "bg-customPaid border rounded-md  text-green-900",
        Pending: "bg-customPending text-customPendingText  ",
        Lock: "bg-red-100 text-red-800 border rounded-md",
      };

      return (
        <div
          className={` px-2 py-1 items-center m-auto justify-center flex rounded ${
            statusStyles[status as string]
          }`}
        >
          {status as string}
        </div>
      );
    },
  },
  {
    id: "actions",
    header: "ACTION",
    enableHiding: false,
    cell: ({}) => {
      return (
        <div>
          <span>
            <CurdPopup />
          </span>
          <Button variant="ghost" className="h-8 w-8 p-0 hover:border-none">
            <Close />
          </Button>
        </div>
      );
    },
  },
];

// DataTable Component
export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});

  const handleSelectUsers = (selectedOptions: string[]) => {
    const newRowSelection: { [key: string]: boolean } = {};
    data.forEach((row) => {
      if (
        selectedOptions.includes(row.status) ||
        selectedOptions.includes("All")
      ) {
        newRowSelection[row.id] = true;
      }
    });
    setRowSelection(newRowSelection);
  };
  const handleSearch = (searchValue: string) => {
    setGlobalFilter(searchValue);
  };

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      globalFilter,
      columnVisibility,
      rowSelection,
    },
    globalFilterFn: "includesString",
  });

  return (
    <>
      <UserHeader onSelect={handleSelectUsers} onSearch={handleSearch} />
      <div className="max-m-fit m-10 2xl:m-20 bg-customLightGray border rounded-md h-full">
        <div className="flex justify-between pt-6">
          <div className="flex flex-col">
            <div className="pl-10 h-6 text-2xl font-semibold text-dark flex flex-row space-x-3">
              <h1>User Details</h1>
              <span className="w-fit rounded-md bg-customGreen bg-opacity-10 px-2.5 py-0.5 text-sm">
                {table.getFilteredRowModel().rows.length} user
              </span>
            </div>

            <div className="pl-10 pt-2 text-sm text-customGray font-thin flex">
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
        <div className="flex items-center py-4"></div>
        <div className="px-10 ">
          <Table>
            <TableHeader className="bg-customTabelHeader text-customHeaderText">
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody className="bg-white ">
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell
                    colSpan={columns.length}
                    className="h-24 text-center"
                  >
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="text-sm ">
          <UsersTablePagination />
        </div>
      </div>
    </>
  );
}
