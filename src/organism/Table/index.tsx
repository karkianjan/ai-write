import React from "react";
import { useState } from "react";
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  useReactTable,
  SortingState,
  ColumnFiltersState,
  VisibilityState,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserHeader from "@/Views/Users/UsersHeader";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";
import UsersTablePagination from "@/Views/Users/TablePagination";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  itemsPerPage: number;
  totalDataLength?: number;
  handlePageChange?: (pageNumber: number) => void;
}

export function UsersDataTable() {
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
                <DownloadIcon />
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

export function DataTable<TData, TValue>({
  columns,
  data,
}: // itemsPerPage,
// totalDataLength,
// handlePageChange,
DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});

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
    <div className="max-h-[calc(100vh-220px)] overflow-auto rounded-md border border-[#E5E7EB] text-gray-gray3">
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow className="hover:bg-white text-md" key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} className="text-night  font-bold  ">
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
        <TableBody>
          {table.getRowModel().rows.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} className="hover:bg-night/10">
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
}
