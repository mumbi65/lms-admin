// src/components/AppLayout.tsx (or layout.tsx)
import React, { useState } from 'react'
import { Sidebar } from './sidebar'
import { Topbar } from './topbar'

interface LayoutProps {
  onSearch?: (term: string) => void
  children: React.ReactNode
}

export function Layout({ children, onSearch }: LayoutProps) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      <Sidebar isExpanded={sidebarExpanded} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar 
        onToggleSidebar={() => setSidebarExpanded(expanded => !expanded)}
        onSearch={onSearch}
        />
        <main className="p-6 overflow-auto font-body text-black">{children}</main>
      </div>
    </div>
  )
}