"use client";

import { changeRole, SanitizedUser } from '@/actions/adminActions';
import { Search, UserCheck, UserX } from 'lucide-react';
import React, { useState } from 'react';


export default function UsersClient({ users }: { users: SanitizedUser[] }) {
  const [roleFilter, setRoleFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [userList, setUserList] = useState<SanitizedUser[]>(users);

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
        prev.map(userList =>
          userList._id === userId
            ? { ...userList, isAdmin: newRole }
            : userList
        )
      );
    } catch (error) {
      console.error("Failed to update user status:", error);
      alert("Failed to update user status. Please try again.");
    }
  };

  const filteredUsers = userList.filter(userList => {
    const matchesSearch =
      userList.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      userList.email.toLowerCase().includes(searchQuery.toLowerCase())

    const matchesRole =
      roleFilter === 'all' ||
      userList.isAdmin.toLowerCase() === roleFilter.toLowerCase();

    return matchesSearch && matchesRole;
  });

  return (
    <div className="bg-white rounded-lg shadow">
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
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex space-x-3">
          <select
            name="roleFilter"
            id="roleFilter"
            title="Filter by Role"
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
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
            {filteredUsers.map((user) => (
              <tr key={user._id} className="hover:bg-gray-50">
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
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => handleRoleChange(user._id, 'admin')}
                      title="Activate User"
                    >
                      <UserCheck className="h-4 w-4 text-green-500" />
                    </button>
                    <button
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => handleRoleChange(user._id, 'regular')}
                      title="Change to Regular"
                    >
                      <UserX className="h-4 w-4 text-red-500" />
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
          Showing {filteredUsers.length} of {users.length} users
        </p>

        <div className="flex space-x-2">
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Previous</button>
          <button className="px-3 py-1 bg-indigo-600 text-white rounded hover:bg-indigo-700">1</button>
          <button className="px-3 py-1 border rounded hover:bg-gray-50">Next</button>
        </div>
      </div>
    </div>
  );
}