import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { UpdateEmployeeProfileForm } from "./update-employee-profile-form";

const UpdateMyProfileModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button>Update Profile</Button>
      </DialogTrigger>
      <DialogContent className="min-w-[55%] 2xl:min-w-[45%] font-geist">
        <DialogHeader>
          <DialogTitle className="mb-8">Update my profile</DialogTitle>
          <DialogDescription>
            <UpdateEmployeeProfileForm />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default UpdateMyProfileModal;
