"use client";
import React, {useEffect} from "react";
import { usePathname } from "next/navigation";
import {  LogOut, User } from "lucide-react";
import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await signOut({
        callbackUrl: "/sign-in", 
        redirect: true
      });
    } catch (error) {
      console.error("Logout error:", error);
      
      router.push("/sign-in");
    }
  };
  
  const userDisplayName = session?.user?.email || session?.user?.username || "Admin User";

  return (
    <div className="overflow-x-auto bg-gray-100">
      <nav className="w-full bg-white shadow-md border-b border-gray-200">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-md md:text-xl font-bold text-gray-900">
                Seminar Hall Booking Admin Panel
              </h1>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2 text-gray-700">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">{userDisplayName}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-red-600 hover:bg-gray-100 rounded-md transition-colors"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="flex w-full">
        <main className="flex-1 overflow-scroll p-8">
          {children}
        </main>
      </div>
    </div>
  );
}