// src/components/Topbar.tsx
'use client';

import {Table2Icon as MenuIcon,Search,Bell,HelpCircle,ChevronDown, } from 'lucide-react';
import {DropdownMenu,DropdownMenuTrigger,DropdownMenuContent,DropdownMenuItem,} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import userAvatar from '../assets/images/image1.jpg'; 
import { SidebarMobile } from './sidebarMobile';


interface TopbarProps {
  onToggleSidebar: () => void;
}

export function Topbar({ onToggleSidebar }: TopbarProps) {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left group: sidebar toggle + search */}
        <div className="flex items-center gap-4">
          <SidebarMobile />

          {/* Sidebar toggle */}
          <button
            onClick={onToggleSidebar}
            className="hidden md:block p-2 rounded-md hover:bg-gray-100 transition"
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Search input */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FE3448] focus:border-[#FE3448] w-64"
              style={{ fontFamily: 'Open Sans' }}
            />
          </div>
        </div>

        {/* Right group: help, notifications, profile */}
        <div className="flex items-center gap-4">
          <HelpCircle className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 transition" />
          <Bell className="w-6 h-6 text-gray-400 cursor-pointer hover:text-gray-600 transition" />

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 py-1">
                <img
                  src={userAvatar}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-medium text-gray-900" style={{ fontFamily: 'Inter' }}>
                  John Doe
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => console.log('Go to profile')}>
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('Change avatar')}>
                Change Avatar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('Sign out')}>
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
