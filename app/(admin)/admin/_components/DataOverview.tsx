"use client";
import React, { useState } from 'react';
import { 
  Calendar, 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
} from 'lucide-react';
import { Booking } from '@/actions/adminActions';

export default function DataOverview({ bookings }: { bookings: Booking[] }) {
    const tBookings = bookings.length;

  const dashboardStats = [
    { 
      title: 'Total Bookings', 
      value: tBookings, 
      icon: <Calendar className="h-6 w-6 text-blue-500" /> 
    },
    { 
      title: 'Pending Approvals', 
      value: bookings.filter(booking => booking.status === "pending").length, 
      icon: <AlertTriangle className="h-6 w-6 text-amber-500" /> 
    },
    { 
    title: 'Halls Available', 
    value: Math.max(0, 3 - new Set(
        bookings
        .filter(booking => booking.status === "approved")
        .map(booking => booking.Hall)
    ).size), 
    icon: <CheckCircle className="h-6 w-6 text-green-500" /> 
    },
    { 
        title: "Today's Events", 
        value: bookings.filter(booking => {
          const bookingDate = new Date(booking.Date).toISOString().split('T')[0];
          const today = new Date().toISOString().split('T')[0];
          return bookingDate === today;
        }).length, 
        icon: <Clock className="h-6 w-6 text-purple-500" /> 
      }
      
  ];
  return (
    <div className="flex h-screen bg-gray-50">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-white shadow-sm z-10">
          <div className="px-6 py-4 flex items-center justify-between">
            <h1 className="text-xl font-semibold text-gray-800">
              Admin Dashboard
            </h1>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-800 font-bold">
                  A
                </div>
              </div>
            </div>
          </div>
        </header>
        
        <main className="flex-1 overflow-y-auto p-6"> 
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {dashboardStats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-lg shadow p-6 flex items-center">
                    <div className="bg-indigo-50 p-3 rounded-full mr-4">
                      {stat.icon}
                    </div>
                    <div>
                      <h3 className="text-gray-500 text-sm">{stat.title}</h3>
                      <p className="text-2xl font-bold">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
        </main>
      </div>
    </div>
  );
}