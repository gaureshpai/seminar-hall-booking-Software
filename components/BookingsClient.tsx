"use client";

import { Booking, updateBookingStatus } from '@/actions/adminActions';
import { CheckCircle, Search, XCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useMemo } from 'react';

export default function BookingsClient({ bookings }: { bookings: Booking[] }) {
  const [statusFilter, setStatusFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [localBookings, setLocalBookings] = useState<Booking[]>(bookings.reverse()); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const getStatusBadgeClass = (status: string) => {
    switch (status.toLowerCase()) {
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

  const handleStatusChange = async (bookingId: string, newStatus: string) => {
    try {
      await updateBookingStatus(bookingId, newStatus);
      setLocalBookings(prev =>
        prev.map(booking =>
          booking.id === bookingId
            ? { ...booking, status: newStatus }
            : booking
        )
      );
    } catch (error) {
      console.error("Failed to update booking status:", error);
      alert("Failed to update booking status. Please try again.");
    }
  };
  
  const filteredBookings = useMemo(() => {
    return localBookings.filter(booking => {
      const matchesSearch =
        booking.Hall.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.FacultyIncharge.toLowerCase().includes(searchQuery.toLowerCase()) ||
        booking.Event.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === 'all' ||
        booking.status.toLowerCase() === statusFilter.toLowerCase();

      return matchesSearch && matchesStatus;
    });
  }, [localBookings, searchQuery, statusFilter]);
  
  const totalPages = Math.ceil(filteredBookings.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBookings = filteredBookings.slice(startIndex, endIndex);
  
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, statusFilter]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };
  
  const getPageNumbers = () => {
    const pages = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, currentPage + 2);

      if (currentPage <= 3) {
        endPage = Math.min(maxPagesToShow, totalPages);
      }
      if (currentPage >= totalPages - 2) {
        startPage = Math.max(1, totalPages - maxPagesToShow + 1);
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }
    }

    return pages;
  };

  return (
    <div className="bg-white rounded-lg shadow p-12">
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
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <select
            name="statusFilter"
            id="statusFilter"
            title="Filter by Status"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="approved">Approved</option>
            <option value="rejected">Rejected</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b bg-gray-50">
              <th className="px-6 py-3 font-medium">Hall Name</th>
              <th className="px-6 py-3 font-medium">Requested By</th>
              <th className="px-6 py-3 font-medium">Department</th>
              <th className="px-6 py-3 font-medium">Date</th>
              <th className="px-6 py-3 font-medium">Time</th>
              <th className="px-6 py-3 font-medium">Event</th>
              <th className="px-6 py-3 font-medium">Status</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentBookings.length > 0 ? (
              currentBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 text-sm">{booking.Hall}</td>
                  <td className="px-6 py-4 text-sm">{booking.FacultyIncharge}</td>
                  <td className="px-6 py-4 text-sm">{booking.Department}</td>
                  <td className="px-6 py-4 text-sm">
                    {new Date(booking.Date).toISOString().split('T')[0]}
                  </td>
                  <td className="px-6 py-4 text-sm">{booking.Time}</td>
                  <td className="px-6 py-4 text-sm">{booking.Event}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${getStatusBadgeClass(booking.status)}`}>
                      {booking.status || 'pending'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button
                        title="Approve Booking"
                        className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleStatusChange(booking.id, 'approved')}
                        disabled={booking.status === 'approved'}
                      >
                        <CheckCircle className={`h-4 w-4 ${booking.status === 'approved' ? 'text-gray-400' : 'text-green-500'}`} />
                      </button>
                      <button
                        title="Reject Booking"
                        className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleStatusChange(booking.id, 'rejected')}
                        disabled={booking.status === 'rejected'}
                      >
                        <XCircle className={`h-4 w-4 ${booking.status === 'rejected' ? 'text-gray-400' : 'text-red-500'}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="px-6 py-8 text-center text-gray-500">
                  No bookings found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 flex items-center justify-between border-t">
        <p className="text-sm text-gray-500">
          Showing {Math.min(startIndex + 1, filteredBookings.length)} to {Math.min(endIndex, filteredBookings.length)} of {filteredBookings.length} bookings
          {filteredBookings.length !== localBookings.length && ` (filtered from ${localBookings.length} total)`}
        </p>

        {totalPages > 1 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 cursor-pointer ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              <ChevronLeft className="h-4 w-4 mr-1" />
              Previous
            </button>

            <div className="flex space-x-1">
              {getPageNumbers().map((pageNum) => (
                <button
                  key={pageNum}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded cursor-pointer ${currentPage === pageNum
                      ? 'bg-indigo-600 text-white'
                      : 'border hover:bg-gray-50'
                    }`}
                >
                  {pageNum}
                </button>
              ))}
            </div>

            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 cursor-pointer ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
                }`}
            >
              Next
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}