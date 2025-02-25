import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

export function UserAvatar({ imageUrl, name }: { imageUrl: string, name: string }) {
  return (
    <Avatar>
      <AvatarImage src={imageUrl} alt={name} />
      <AvatarFallback className="text-lg hover:bg-slate-300 cursor-pointer active:outline-none">{name.charAt(0)}</AvatarFallback>
    </Avatar>
  )
}
