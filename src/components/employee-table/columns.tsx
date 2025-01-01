"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";
import { format } from "date-fns";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
  id: string;
  firstName: string;
  lastName: string;
  role: string;
  email: string;
  department: string;
  createdAt: Date;
  salary: number;
};

export const employeeColumns: ColumnDef<Employee>[] = [
  {
    id: "select",
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "firstName",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <p className="text-left">First Name</p>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-full w-fit p-0 font-medium text-left"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <p className="text-left">Last Name</p>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-full w-fit p-0 font-medium text-left"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
  },
  {
    accessorKey: "email",
    header: () => <div className="text-left">Email</div>,
    cell: ({ row }) => {
      const email: string = row.getValue("email");
      return <span className="text-left">{email}</span>;
    },
  },
  {
    accessorKey: "role",
    header: () => <div className="text-left">Role</div>,
  },
  {
    accessorKey: "department",
    header: () => <div className="text-left">Department</div>,
  },
  {
    accessorKey: "salary",
    header: () => <div className="text-left">Salary</div>,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <div className="flex items-center">
          <p className="text-left">Created on</p>
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            className="h-full w-fit p-0 font-medium text-left"
          >
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </div>
      );
    },
    cell: ({ row, column }) => {
      const date = new Date(row.getValue(column.id));
      const formatted = format(date, "dd/MM/yyyy hh:mm aa");
      return <span>{formatted}</span>;
    },
  },
];
