"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PieChart, Calendar, Users } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="h-screen flex flex-col">
      <div className=" bg-white shadow-sm"></div>

      <div className="flex flex-grow">
        <aside className="w-64 bg-[#04091e] text-white flex flex-col p-5">
          <h2 className="text-xl font-bold mb-1">AJIET</h2>
          <h3 className="text-sm">Admin Panel</h3>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <Link
                  href="/admin/dashboard"
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 ${
                    pathname === "/admin/dashboard" ? "bg-indigo-700" : ""
                  }`}
                >
                  <PieChart className="mr-3 h-5 w-5" />
                  <span>Overview</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/bookings"
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 ${
                    pathname === "/admin/bookings" ? "bg-indigo-700" : ""
                  }`}
                >
                  <Calendar className="mr-3 h-5 w-5" />
                  <span>Bookings</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/admin/users"
                  className={`flex items-center w-full p-3 rounded-lg hover:bg-indigo-700 ${
                    pathname === "/admin/users" ? "bg-indigo-700" : ""
                  }`}
                >
                  <Users className="mr-3 h-5 w-5" />
                  <span>Users</span>
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
