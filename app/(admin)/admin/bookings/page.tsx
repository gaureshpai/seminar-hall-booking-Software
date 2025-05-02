"use client";
import { CheckCircle, Search, XCircle } from 'lucide-react';
import React, {useState} from 'react';

const bookingData = [
    { id: 1, hallName: 'Main Seminar Hall', requestedBy: 'Dr. Rajesh Kumar', department: 'Computer Science', date: '2025-05-05', startTime: '10:00 AM', endTime: '12:00 PM', status: 'Approved', purpose: 'Technical Workshop on AI' },
    { id: 2, hallName: 'Conference Room A', requestedBy: 'Prof. Sunita Sharma', department: 'Electronics', date: '2025-05-06', startTime: '2:00 PM', endTime: '4:00 PM', status: 'Pending', purpose: 'Department Meeting' },
    { id: 3, hallName: 'Auditorium', requestedBy: 'Dr. Anil Patel', department: 'Mechanical', date: '2025-05-07', startTime: '9:00 AM', endTime: '1:00 PM', status: 'Approved', purpose: 'National Conference' },
    { id: 4, hallName: 'Lecture Hall 5', requestedBy: 'Prof. Deepa Rao', department: 'Civil', date: '2025-05-04', startTime: '3:00 PM', endTime: '5:00 PM', status: 'Rejected', purpose: 'Guest Lecture' },
    { id: 5, hallName: 'Main Seminar Hall', requestedBy: 'Dr. Mohan Joshi', department: 'Information Technology', date: '2025-05-08', startTime: '11:00 AM', endTime: '1:00 PM', status: 'Pending', purpose: 'Software Demonstration' }
];

const page = () => {
    const [statusFilter, setStatusFilter] = useState('all');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredBookings = bookingData.filter(booking => {
      const matchesSearch = booking.hallName.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            booking.requestedBy.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            booking.purpose.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesStatus = statusFilter === 'all' || booking.status.toLowerCase() === statusFilter.toLowerCase();
      
      return matchesSearch && matchesStatus;
    });


    const getStatusBadgeClass = (status: string) => {
      switch(status.toLowerCase()) {
        case 'approved':
          return 'bg-green-100 text-green-800';
        case 'pending':
          return 'bg-amber-100 text-amber-800';
        case 'rejected':
          return 'bg-red-100 text-red-800';
        default:
          return 'bg-gray-100 text-gray-800';
      }
    };

  return (
    <div className="bg-white rounded-lg shadow">
              <div className="p-6 border-b">
                <h2 className="text-lg font-semibold">Manage Bookings</h2>
                <p className="text-gray-500 text-sm mt-1">Review and process seminar hall booking requests</p>
              </div>
              
              <div className="p-6 border-b flex flex-wrap items-center justify-between gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <input
                    type="text"
                    placeholder="Search bookings..."
                    className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex space-x-3">
                  <select
                    className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    value={statusFilter}
                    onChange={(e) => setStatusFilter(e.target.value)}
                  >
                    <option value="all">All Status</option>
                    <option value="pending">Pending</option>
                    <option value="approved">Approved</option>
                    <option value="rejected">Rejected</option>
                  </select>
                  
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
                    Add New Booking
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-xs text-gray-500 border-b bg-gray-50">
                      <th className="px-6 py-3 font-medium">ID</th>
                      <th className="px-6 py-3 font-medium">Hall Name</th>
                      <th className="px-6 py-3 font-medium">Requested By</th>
                      <th className="px-6 py-3 font-medium">Department</th>
                      <th className="px-6 py-3 font-medium">Date</th>
                      <th className="px-6 py-3 font-medium">Time</th>
                      <th className="px-6 py-3 font-medium">Purpose</th>
                      <th className="px-6 py-3 font-medium">Status</th>
                      <th className="px-6 py-3 font-medium">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y">
                    {filteredBookings.map((booking) => (
                      <tr key={booking.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm">{booking.id}</td>
                        <td className="px-6 py-4 text-sm">{booking.hallName}</td>
                        <td className="px-6 py-4 text-sm">{booking.requestedBy}</td>
                        <td className="px-6 py-4 text-sm">{booking.department}</td>
                        <td className="px-6 py-4 text-sm">{booking.date}</td>
                        <td className="px-6 py-4 text-sm">{booking.startTime} - {booking.endTime}</td>
                        <td className="px-6 py-4 text-sm">{booking.purpose}</td>
                        <td className="px-6 py-4 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(booking.status)}`}>
                            {booking.status}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-sm">
                          <div className="flex space-x-2">
                            <button className="p-1 rounded-full hover:bg-gray-100">
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            </button>
                            <button className="p-1 rounded-full hover:bg-gray-100">
                              <XCircle className="h-4 w-4 text-red-500" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="p-6 flex items-center justify-between border-t">
                <p className="text-sm text-gray-500">
                  Showing {filteredBookings.length} of {bookingData.length} bookings
                </p>
                
                <div className="flex space-x-2">
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
                  <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">1</button>
                  <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
                </div>
              </div>
            </div>
  )
}

export default page
