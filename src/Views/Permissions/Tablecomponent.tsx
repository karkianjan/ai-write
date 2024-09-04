import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ColumnDef, flexRender } from "@tanstack/react-table";
interface RowType {
  id: string; 
  getVisibleCells: () => CellType[]; 
}
interface CellType {
  id: string; 
  column: {
    columnDef: {
      cell: (context: any) => JSX.Element;
    };
  };
  getContext: () => any; 
}

interface TableComponentProps<T> {
  columns: ColumnDef<T>[];
  data: T[];
}

export function TableComponent<T>({ columns, data }: TableComponentProps<T>) {
  return (
    <Table>
      <TableHeader className="bg-customTabelHeader text-customHeaderText">
        {data.length > 0 && (
          <TableRow>
            {columns.map((column) => (
              <TableHead key={column.id}>
                {flexRender(column.header, column)}
              </TableHead>
            ))}
          </TableRow>
        )}
      </TableHeader>
      <TableBody className="bg-white ">
        {data.length > 0 ? (
          data.map((row) => (
            <TableRow key={row.id}>
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
  );
}
