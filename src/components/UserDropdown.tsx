import { useState } from "react";
import { User, Settings, MessageCircle, Edit, ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/hooks/useAuth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const UserDropdown = () => {
  const { user: authUser, logout } = useAuth();
  
  if (!authUser) return null;
  
  const user = {
    name: `${authUser.user_metadata?.first_name || 'John'} ${authUser.user_metadata?.last_name || 'Doe'}`,
    email: authUser.email || "john@university.edu",
    avatar: "/placeholder.svg",
    initials: `${authUser.user_metadata?.first_name?.[0] || 'J'}${authUser.user_metadata?.last_name?.[0] || 'D'}`
  };

  return (
    <div className="fixed top-6 right-6 z-[60]">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 glass p-2 rounded-full hover:bg-white/10 transition-colors group outline-none">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.avatar} alt={user.name} />
            <AvatarFallback className="bg-primary text-primary-foreground text-sm">
              {user.initials}
            </AvatarFallback>
          </Avatar>
          <ChevronDown size={14} className="text-foreground/60 group-hover:text-foreground transition-colors" />
        </DropdownMenuTrigger>
        <DropdownMenuContent 
          align="end" 
          className="w-48 bg-background/95 backdrop-blur-sm border-white/10"
          sideOffset={8}
        >
          <div className="px-3 py-2 border-b border-white/10">
            <p className="text-sm font-medium text-foreground">{user.name}</p>
            <p className="text-xs text-foreground/70">{user.email}</p>
          </div>
          
          <DropdownMenuItem asChild>
            <a href="/profile" className="flex items-center gap-2 cursor-pointer">
              <User size={16} />
              Profile
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <a href="/edit-profile" className="flex items-center gap-2 cursor-pointer">
              <Edit size={16} />
              Edit Profile
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuItem asChild>
            <a href="/messages" className="flex items-center gap-2 cursor-pointer">
              <MessageCircle size={16} />
              Messages
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="border-white/10" />
          
          <DropdownMenuItem asChild>
            <a href="/settings" className="flex items-center gap-2 cursor-pointer">
              <Settings size={16} />
              Settings
            </a>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="border-white/10" />
          
          <DropdownMenuItem onClick={logout} className="flex items-center gap-2 cursor-pointer text-destructive">
            <LogOut size={16} />
            Sign Out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserDropdown;