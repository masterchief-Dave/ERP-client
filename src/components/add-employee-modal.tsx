import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { ProfileForm } from "./add-employee-form";

const AddEmployeeModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Open</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[55%] 2xl:min-w-[45%]">
        <DialogHeader>
          <DialogTitle className="mb-8">Create User Profile</DialogTitle>
          <DialogDescription>
            <ProfileForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddEmployeeModal;
