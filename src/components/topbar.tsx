// src/components/Topbar.tsx
'use client';
import { Table2Icon as MenuIcon, Search, Bell, HelpCircle, ChevronDown, } from 'lucide-react';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, } from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import userAvatar from '../assets/images/image1.jpg';
import { SidebarMobile } from './sidebarMobile';
import { useState, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  avatarUrl: string | null;
}

interface TopbarProps {
  onToggleSidebar: () => void;
  onSearch?: (term: string) => void
}

export function Topbar({ onToggleSidebar, onSearch }: TopbarProps) {
  const [user, setUser] = useState<User | null>(null)
  const [query, setQuery] = useState('')

  useEffect(() => {
    // Fetch user data from an API
    async function loadUser() {
      try {
        const response = await fetch('/api/me')
        if (!response.ok) throw new Error('Network response was not ok')
        const data: User = await response.json()
        setUser(data)
      } catch (error) {
        console.error("Failed to fetch user: ", error)
      }
    }
    loadUser()
  }, [])

  const avatarSrc = user?.avatarUrl || userAvatar
  const displayName = user?.name || "John Doe"

  function handleSerchChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value
    setQuery(val)
    onSearch?.(val)
  }

  return (
    <header className="bg-white border-b border-border-gray px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Left group: sidebar toggle + search */}
        <div className="flex items-center gap-4">
          <SidebarMobile />

          {/* Sidebar toggle */}
          <button
            onClick={onToggleSidebar}
            className="hidden md:block p-2 rounded-md hover:bg-gray-100 transition-colors"
            aria-label="Toggle sidebar"
          >
            <MenuIcon className="w-6 h-6 text-gray-700" />
          </button>

          {/* Search input */}
          <div className="relative hidden sm:block">
            <button
              onClick={() => onSearch?.(query)}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            </button>
            <input
              value={query}
              onChange={handleSerchChange}
              onKeyDown={e => e.key === 'Enter' && onSearch?.(query)}
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-red focus:border-red w-64 font-body"
            />
          </div>
        </div>

        {/* Right group: help, notifications, profile */}
        <div className="flex items-center gap-4">
          <HelpCircle className="w-6 h-6 text-black cursor-pointer hover:text-blue transition-colors" />
          <Bell className="w-6 h-6 text-black cursor-pointer hover:text-blue transition-colors" />

          {/* Profile dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2 px-2 py-1 hover:bg-gray-50 transition-colors">
                <img
                  src={avatarSrc}
                  alt="User avatar"
                  className="w-8 h-8 rounded-full object-cover"
                />
                <span className="font-heading font-medium text-gray-900 hover:text-blue transition-colors">
                  {displayName}
                </span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={() => console.log('Go to profile')} className="font-body">
                Profile Settings
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('Change avatar')} className="font-body">
                Change Avatar
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => console.log('Sign out')} className="font-body text-red hover:text-red hover:bg-red/10">
                Sign Out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}