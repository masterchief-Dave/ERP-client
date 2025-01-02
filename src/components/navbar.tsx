import { useSidebar } from "@/components/ui/sidebar";
import { GripIcon, MinusIcon } from "lucide-react";
import UserAvatar from "./user-avatar";

const UserNav = () => {
  return (
    <nav className="bg-[#222] px-2 sm:px-4 font-[family-name:var(--font-geist-sans)] w-full text-white py-2 sm:py-4">
      {/* Main container */}
      <div className="flex items-center justify-between">
        {/* Left section */}
        <div className="flex items-center gap-x-2 sm:gap-x-8">
          <CustomTrigger />

          {/* App title - Hide on mobile, show abbreviated on tablet */}
          <div className="hidden sm:flex items-center text-white gap-x-1">
            <h3 className="font-medium text-sm sm:text-base">
              <span className="hidden md:inline">ERP-MODULE</span>
            </h3>
            <MinusIcon className="transform rotate-90 hidden sm:block w-4 h-4" />
            <p className="text-sm sm:text-base">Dashboard</p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex items-center">
          {/* Avatar section */}
          <div className="relative ml-2 sm:ml-4">
            <UserAvatar
              image="https://github.com/shadcn.png"
              placeholder="WG"
              className="w-8 h-8 sm:w-10 sm:h-10"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserNav;

const CustomTrigger = () => {
  const { toggleSidebar } = useSidebar();

  return (
    <div className="w-fit cursor-pointer">
      <GripIcon className="w-5 h-5 sm:w-6 sm:h-6" onClick={toggleSidebar} />
    </div>
  );
};
