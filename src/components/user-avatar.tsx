import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
export default function UserAvatar({
  image = "https://github.com/shadcn.png",
  placeholder,
  className,
}: {
  image?: string;
  placeholder: string;
  className?: string;
}) {
  return (
    <Avatar>
      <AvatarImage src={image} />
      <AvatarFallback className={`${className}`}>{placeholder}</AvatarFallback>
    </Avatar>
  );
}
