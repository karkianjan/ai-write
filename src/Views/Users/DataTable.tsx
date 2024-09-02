import { useState } from "react";
import * as React from "react";
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
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

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
    id: "1",
    name: "Tshiring Dorje Sherpa",
    serialNumber: 1,
    email: "Tshiring@gmail.com",
    monthlyFee: 15,
    expiryDate: "2024-12-01",
    status: "Paid",
  },
  {
    id: "2",
    name: "Dip Roshan Rai",
    serialNumber: 2,
    email: "dip@gmail.com",
    monthlyFee: 20,
    expiryDate: "2024-11-15",
    status: "Paid",
  },
  {
    id: "3",
    name: "Ashmita Chimoriya",
    serialNumber: 3,
    email: "Ahmita44@gmail.com",
    monthlyFee: 20,
    expiryDate: "2024-10-01",
    status: "Pending",
  },
  {
    id: "4",
    name: "Nelson Katwal",
    serialNumber: 4,
    email: "Nelson@gmail.com",
    monthlyFee: 20,
    expiryDate: "2024-09-30",
    status: "Paid",
  },
  {
    id: "5",
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
      const amount = parseFloat(row.getValue("monthlyFee").toString());

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
    cell: ({ row }) => (
      <div className="capitalize ">{row.getValue("status")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

// DataTable Component
export function DataTable() {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

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
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className="max-m-fit m-10 bg-customLightGray border rounded-md h-full">
      <div className="flex justify-between pt-6">
        <div className="flex flex-col">
          <div className="pl-10 h-6   text-2xl font-semibold text-dark flex flex-row space-x-3">
            <h1>User Details</h1>
            <span className="w-fit rounded-md bg-customGreen bg-opacity-10 px-2.5 py-0.5 text-sm">
              {table.getFilteredRowModel().rows.length} user
            </span>
          </div>

          <div className=" pl-10 pt-2 text-sm text-customGray font-thin flex ">
            Keep track of users and manage them
          </div>
        </div>

        <div className="pr-7">
          <Button
            variant="outline"
            className="hover:border-none hover:bg-none w-fit"
          >
            Export
          </Button>
        </div>
      </div>
      <div className="flex items-center py-4 "></div>
      <div className="  px-10">
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
          <TableBody className="bg-white">
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
      <div className="flex items-center justify-end space-x-2 py-4 pr-10">
        <div className="space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Arr
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Arr
          </Button>
        </div>
      </div>
    </div>
  );
}
