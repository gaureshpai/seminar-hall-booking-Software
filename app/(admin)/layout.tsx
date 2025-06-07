"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PieChart, Calendar, Users } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex flex-col">
      <div className=" bg-white shadow-sm"></div>
      <div className="flex h-screen">
        <aside className=" bg-[#04091e] h-[100%] text-white flex  flex-col p-3">
          <h2 className="text-xl text-center md:text-left md:pl-4 font-bold mb-1">AJIET</h2>
          <h3 className="text-sm hidden md:text-left text-center md:pl-4 md:block">Admin Panel</h3>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li className="flex">
                <Link
                  href="/admin"
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 ${pathname === "/admin" ? "bg-indigo-700" : ""
                    }`}
                >
                  <PieChart className="mr-3 h-5 w-5" />
                  <span className="hidden md:block">Overview</span>
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/admin/bookings"
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 ${pathname === "/admin/bookings" ? "bg-indigo-700" : ""
                    }`}
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  <div className="hidden md:block">Bookings</div>
                </Link>
              </li>
              <li className="flex">
                <Link
                  href="/admin/users"
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 ${pathname === "/admin/users" ? "bg-indigo-700" : ""
                    }`}
                >
                  <Users className="mr-3 h-5 w-5" />
                  <span className="hidden md:block">Users</span>
                </Link>
              </li>
            </ul>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
