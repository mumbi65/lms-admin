// src/components/Sidebar.tsx
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import {FaTachometerAlt,FaChalkboardTeacher,FaUsers,FaProjectDiagram,FaBookOpen,} from 'react-icons/fa'
import zinduaLogo from '../assets/images/Zindua-logo2.png'          

const menuItems = [
  { name: 'Dashboard',       path: '#',  icon: FaTachometerAlt },
  { name: 'Manage Classes',  path: '#',   icon: FaChalkboardTeacher },
  { name: 'Track My Students', path: '#',  icon: FaUsers },
  { name: 'Review Projects', path: '#',   icon: FaProjectDiagram },
  { name: 'Manage Courses',  path: '#',  icon: FaBookOpen },
]

interface SidebarProps {
  isExpanded: boolean;
}

export function Sidebar({ isExpanded }: SidebarProps) {
  const { pathname } = useLocation()
  const [hoveredItem, setHoveredItem] = useState<string | null>(null)

  return (
    <aside className={`
      hidden md:flex flex-col bg-white shadow-sm border-r border-[#D3D3D3] flex flex-col
      transition-all duration-300 ease-in-out
      ${isExpanded ? 'w-64' : 'w-16'}
    `}>
      {/* Logo & Title */}
      <div className={`
        pt-6 flex justify-center transition-all duration-300
        ${isExpanded ? 'opacity-100 max-h-24' : 'opacity-0 max-h-0 overflow-hidden p-0'}
      `}>
        <img 
          src={zinduaLogo} 
          alt="Zindua Logo" 
          className="h-15 w-auto"
        />
      </div>
      
      <div className={`
        px-2 mb-4 transition-all duration-300
        ${isExpanded ? 'opacity-100 max-h-10' : 'opacity-0 max-h-0 overflow-hidden'}
      `}>  
        <p className="font-heading text-m text-black text-center">LMS Admin Dash</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map(({ name, path, icon: Icon }) => {
            const isActive = pathname === path
            return (
            <li key={path} className="relative">
              <Link
                to={path}
                className={`
                  group flex items-center gap-3 px-3 py-2 rounded-md transition-all duration-200
                  ${ isActive
                    ? 'text-red'
                    : 'text-black hover:text-[#FE3448]'}
                `}
                style={{ fontFamily: 'Open Sans'}}
                onMouseEnter={() => setHoveredItem(name)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Icon
                  className={`w-5 h-5 flex-shrink-0 transition
                    ${isActive
                      ? 'text-red'
                      : 'text-black group-hover:text-[#FE3448]'}
                  `}               
                />
                <span className={`
                  transition-all duration-300 whitespace-nowrap
                  ${isExpanded ? 'opacity-100 w-auto' : 'opacity-0 w-0 overflow-hidden'}
                `}>
                  {name}
                </span>
              </Link>
              
              {/* Tooltip for collapsed state */}
              {!isExpanded && hoveredItem === name && (
                <div className="
                  absolute left-full top-0 ml-2 px-3 py-2 
                  bg-[#FE3448] text-white text-sm rounded-md
                  whitespace-nowrap z-50 shadow-lg
                  animate-fade-in
                ">
                  {name}
                  <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 
                                  border-4 border-transparent border-r-[#FE3448]"></div>
                </div>
              )}
            </li>
          )
          })}
        </ul>
      </nav>

    </aside>
  )
}