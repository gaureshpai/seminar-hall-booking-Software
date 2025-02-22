"use client";

import React from "react";

const AdminPanel = () => {
  return (
    <div className="h-screen flex flex-col">
   
      <div className="h-16"></div>

      <div className="flex flex-grow">
      
        <aside className="w-64 bg-[#04091e] text-white flex flex-col p-5 transition-all duration-300">
          <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
          <nav className="space-y-2">
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Dashboard</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Users</a>
            <a href="#" className="block py-2 px-4 rounded hover:bg-gray-700">Bookings</a>
          </nav>
        </aside>

        <main className="flex-1 bg-gray-100 p-6 mt-16">
          <h1 className="text-2xl font-bold">Welcome to Admin Panel</h1>
          <p className="mt-2 text-gray-600">Manage seminar hall bookings efficiently.</p>
        </main>
      </div>
    </div>
  );
};

export default AdminPanel;
