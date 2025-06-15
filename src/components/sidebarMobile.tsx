"use client";
import {Sheet,SheetTrigger,SheetContent,} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import {FaTachometerAlt,FaChalkboardTeacher,FaUsers,FaProjectDiagram,FaBookOpen,} from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'
import zinduaLogo from '../assets/images/Zindua-logo2.png'  


const menuItems = [
  { name: 'Dashboard',       path: '#',  icon: FaTachometerAlt },
  { name: 'Manage Classes',  path: '#',   icon: FaChalkboardTeacher },
  { name: 'Track My Students', path: '#',  icon: FaUsers },
  { name: 'Review Projects', path: '#',   icon: FaProjectDiagram },
  { name: 'Manage Courses',  path: '#',  icon: FaBookOpen },
]


export function SidebarMobile() {

    const { pathname } = useLocation()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="md:hidden p-2 text-black hover:text-red transition-colors"
          aria-label="Open menu"
        >
          <FaBars size={24} />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-64 p-0">
         

         {/* Logo & Title */}
        <div className="pt-6 pb-4 border-b border-border-gray flex flex-col items-center">
          <img src={zinduaLogo} alt="Zindua Logo" className="h-16 w-auto" />
          <p className="mt-2 font-heading text-base text-black">LMS Admin Dash</p>
        </div>

        <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map(({ name, path, icon: Icon }) => {
            const isActive = pathname === path
            return (
            <li key={path}>
              <Link
                to={path}
                className={`
                  flex items-center gap-3 px-4 py-2 rounded-md transition-colors font-body
                  ${ isActive
                    ? 'bg-red text-white'
                    : 'text-black hover:text-red hover:bg-red/10'}
                `}
              >
                <Icon
                  className={`w-5 h-5 transition-colors
                    ${isActive
                      ? 'text-white'
                      : 'text-black'}
                  `}               
                />
                <span>{name}</span>
              </Link>
            </li>
          )
          })}
        </ul>
      </nav>   
      </SheetContent>
    </Sheet>
  );
}