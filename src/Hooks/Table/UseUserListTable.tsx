import Close from "@/components/atom/icons/close";
import { Button } from "@/components/ui/button";
import { CurdPopup } from "@/Views/Users/CurdPopup";
import type { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

export interface Users {
  id: string;
  serialNumber: number;
  name: string;
  email: string;
  monthlyFee: number;
  expiryDate: string;
  status: "All" | "Paid" | "Pending" | "Lock";
}

export const UseUsersListTable = (data: Users[]) => {
  console.log("dept", data);
  const columns = useMemo<ColumnDef<Users>[]>(
    () => [
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
        cell: ({ row }) => (
          <div className="lowercase">{row.getValue("email")}</div>
        ),
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
    ],
    []
  );
  return [columns];
};
