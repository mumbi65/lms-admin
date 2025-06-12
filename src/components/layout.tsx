// src/components/AppLayout.tsx (or layout.tsx)
import React, { useState } from 'react'
import { Sidebar } from './sidebar'
import { Topbar } from './topbar'


export function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarExpanded, setSidebarExpanded] = useState(true);

  return (
    <div className="flex h-screen bg-bg-light  overflow-hidden">
      <Sidebar isExpanded={sidebarExpanded} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Topbar onToggleSidebar={() => setSidebarExpanded(expanded => !expanded)} />
        <main className="p-6 overflow-auto">{children}</main>
      </div>
    </div>
  )
}