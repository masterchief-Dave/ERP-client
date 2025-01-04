import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { format } from "date-fns";
import {
  BriefcaseIcon,
  CalendarIcon,
  DollarSignIcon,
  MailIcon,
} from "lucide-react";

interface EmployeeDetails {
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  joinedAt: Date;
  salary: number;
  department: string;
}

interface EmployeeCardProps {
  employee: EmployeeDetails;
}

const EmployeeCard = ({ employee }: EmployeeCardProps) => {
  const getInitials = (firstName: string, lastName: string) => {
    return `${firstName[0]}${lastName[0]}`.toUpperCase();
  };

  const formatSalary = (salary: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(salary);
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="pb-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12">
            <AvatarFallback className="bg-primary text-primary-foreground">
              {getInitials(employee.firstName, employee.lastName)}
            </AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-semibold text-lg">
              {employee.firstName} {employee.lastName}
            </h3>
            <p className="text-sm text-muted-foreground">{employee.role}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <MailIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{employee.email}</span>
          </div>

          <div className="flex items-center space-x-3">
            <BriefcaseIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">{employee.department}</span>
          </div>

          <div className="flex items-center space-x-3">
            <CalendarIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              Joined {format(employee.joinedAt, "MMM dd, yyyy")}
            </span>
          </div>

          <div className="flex items-center space-x-3">
            <DollarSignIcon className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">
              {formatSalary(employee.salary)}/year
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmployeeCard;
