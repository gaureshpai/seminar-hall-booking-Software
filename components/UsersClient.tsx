"use client";

import { changeRole, SanitizedUser } from '@/actions/adminActions';
import { Search, UserCheck, UserX, ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useMemo } from 'react';

export default function UsersClient({ users }: { users: SanitizedUser[] }) {
  const [roleFilter, setRoleFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [userList, setUserList] = useState<SanitizedUser[]>(users.reverse()); 
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; 

  const getRoleBadgeClass = (role: string) => {
    switch (role.toLowerCase()) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'regular':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      await changeRole(userId, newRole);
      setUserList(prev =>
        prev.map(user =>
          user._id === userId
            ? { ...user, isAdmin: newRole }
            : user
        )
      );
    } catch (error) {
      console.error("Failed to update user status:", error);
      alert("Failed to update user status. Please try again.");
    }
  };
  
  const filteredUsers = useMemo(() => {
    return userList.filter(user => {
      const matchesSearch =
        user.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesRole =
        roleFilter === 'all' ||
        user.isAdmin.toLowerCase() === roleFilter.toLowerCase();

      return matchesSearch && matchesRole;
    });
  }, [userList, searchQuery, roleFilter]);
  
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);
  
  React.useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery, roleFilter]);

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
        <h2 className="text-lg font-semibold">User Management</h2>
        <p className="text-gray-500 text-sm mt-1">Manage user accounts and access permissions</p>
      </div>

      <div className="p-6 border-b flex flex-wrap items-center justify-between gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Search users..."
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <select
            name="roleFilter"
            id="roleFilter"
            title="Filter by Role"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="regular">Regular</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b bg-gray-50">
              <th className="px-6 py-3 font-medium">Username</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Role</th>
              <th className="px-6 py-3 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <tr key={user._id} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 text-sm">{user.username}</td>
                  <td className="px-6 py-4 text-sm">{user.email}</td>
                  <td className="px-6 py-4 text-sm">
                    <span className={`px-2 py-1 rounded-full text-xs ${getRoleBadgeClass(user.isAdmin)}`}>
                      {user.isAdmin}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleRoleChange(user._id, 'admin')}
                        title="Change to Admin"
                        disabled={user.isAdmin === 'admin'}
                      >
                        <UserCheck className={`h-4 w-4 ${user.isAdmin === 'admin' ? 'text-gray-400' : 'text-green-500'}`} />
                      </button>
                      <button
                        className="p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleRoleChange(user._id, 'regular')}
                        title="Change to Regular"
                        disabled={user.isAdmin === 'regular'}
                      >
                        <UserX className={`h-4 w-4 ${user.isAdmin === 'regular' ? 'text-gray-400' : 'text-red-500'}`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  No users found matching your criteria.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 flex items-center justify-between border-t">
        <p className="text-sm text-gray-500">
          Showing {Math.min(startIndex + 1, filteredUsers.length)} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} users
          {filteredUsers.length !== userList.length && ` (filtered from ${userList.length} total)`}
        </p>

        {totalPages > 1 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 cursor-pointer ${
                currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''
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
                  className={`px-3 py-1 rounded cursor-pointer ${
                    currentPage === pageNum
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
              className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 cursor-pointer ${
                currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''
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