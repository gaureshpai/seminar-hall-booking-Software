"use client";
import { Search, UserCheck, UserX } from 'lucide-react';
import React, { useState } from 'react';

const sampleUsers = [
  {
    id: '1',
    username: 'john_doe',
    email: 'john.doe@example.com',
    role: 'admin',
    department: 'Computer Science',
    status: 'active',
    lastLogin: '2025-05-01T10:30:00'
  },
  {
    id: '2',
    username: 'sarah_smith',
    email: 'sarah.smith@example.com',
    role: 'faculty',
    department: 'Electrical Engineering',
    status: 'active',
    lastLogin: '2025-05-02T09:15:00'
  },
  {
    id: '3',
    username: 'michael_johnson',
    email: 'michael.j@example.com',
    role: 'staff',
    department: 'Mechanical Engineering',
    status: 'inactive',
    lastLogin: '2025-04-25T14:20:00'
  },
  {
    id: '4',
    username: 'emma_wilson',
    email: 'emma.w@example.com',
    role: 'faculty',
    department: 'Civil Engineering',
    status: 'active',
    lastLogin: '2025-05-03T11:45:00'
  },
  {
    id: '5',
    username: 'robert_brown',
    email: 'robert.b@example.com',
    role: 'staff',
    department: 'Physics',
    status: 'pending',
    lastLogin: '2025-04-30T16:10:00'
  },
  {
    id: '6',
    username: 'lisa_garcia',
    email: 'lisa.g@example.com',
    role: 'faculty',
    department: 'Mathematics',
    status: 'active',
    lastLogin: '2025-05-04T08:30:00'
  }
];

export default function UsersClient() {
  const [roleFilter, setRoleFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [users, setUsers] = useState(sampleUsers);

  const handleRoleChange = async (userId: string, newRole: string) => {
    try {
      setUsers(prev => 
        prev.map(user => 
          user.id === userId 
            ? { ...user, role: newRole } 
            : user
        )
      );
    } catch (error) {
      console.error("Failed to update user status:", error);
      alert("Failed to update user status. Please try again.");
    }
  };

  const filteredUsers = users.filter(user => {
    const matchesSearch = 
      user.username.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase())
    
    const matchesRole = 
      roleFilter === 'all' || 
      user.role.toLowerCase() === roleFilter.toLowerCase();
    
    return matchesSearch  && matchesRole;
  });


  const getRoleBadgeClass = (role: string) => {
    switch(role.toLowerCase()) {
      case 'admin':
        return 'bg-purple-100 text-purple-800';
      case 'regular':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

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
            className="border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={roleFilter}
            onChange={(e) => setRoleFilter(e.target.value)}
          >
            <option value="all">All Roles</option>
            <option value="admin">Admin</option>
            <option value="faculty">Faculty</option>
            <option value="staff">Staff</option>
          </select>
          
          <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Add New User
          </button>
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
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 text-sm">{user.username}</td>
                <td className="px-6 py-4 text-sm">{user.email}</td>
                <td className="px-6 py-4 text-sm">
                  <span className={`px-2 py-1 rounded-full text-xs ${getRoleBadgeClass(user.role)}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 text-sm">
                  <div className="flex space-x-2">
                    <button 
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => handleRoleChange(user.id, 'admin')}
                      title="Activate User"
                    >
                      <UserCheck className="h-4 w-4 text-green-500" />
                    </button>
                    <button 
                      className="p-1 rounded-full hover:bg-gray-100"
                      onClick={() => handleRoleChange(user.id, 'regular')}
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