"use client";

import { deleteContact } from '@/actions/contactActions';
import { IContactClient } from '@/models/Contact';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import React, { useState, useEffect } from 'react';

export default function ContactMessages({ contacts }: { contacts: IContactClient[] }) {
  const [contactList, setContactList] = useState<IContactClient[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  useEffect(() => {
    setContactList([...contacts].reverse());
  }, [contacts]);

  const handleDelete = async (id: string) => {
    try {
      setContactList((prev) => prev.filter((contact) => contact._id.toString() !== id));
      await deleteContact(id);
    } catch (error) {
      console.error("Failed to delete contact:", error);
      alert("Failed to delete contact. Please try again.");
    }
  };

  const totalPages = Math.ceil(contactList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = contactList.slice(startIndex, endIndex);

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

  const formatDateTime = (dateString: string) => {
    return new Date(dateString).toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="bg-white rounded-lg shadow p-12">
      <div className="p-6 border-b">
        <h2 className="text-lg font-semibold">Contact Management</h2>
        <p className="text-gray-500 text-sm mt-1">View or Delete User Issues</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-xs text-gray-500 border-b bg-gray-50">
              <th className="px-6 py-3 font-medium">Name</th>
              <th className="px-6 py-3 font-medium">Email</th>
              <th className="px-6 py-3 font-medium">Subject</th>
              <th className="px-6 py-3 font-medium">Message</th>
              <th className="px-6 py-3 font-medium">Delete</th>
              <th className="px-6 py-3 font-medium">Time</th>

            </tr>
          </thead>
          <tbody className="divide-y">
            {currentUsers.length > 0 ? (
              currentUsers.map((contact) => (
                <tr key={contact._id.toString()} className="hover:bg-gray-50 cursor-pointer">
                  <td className="px-6 py-4 text-sm">{contact.name}</td>
                  <td className="px-6 py-4 text-sm">{contact.email}</td>
                  <td className="px-6 py-4 text-sm">{contact.subject}</td>
                  <td className="px-6 py-4 text-sm">{contact.message}</td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 rounded-2xl hover:bg-red-700 bg-red-800 text-white px-3"
                        onClick={() => handleDelete(contact._id.toString())}
                        title="Delete Contact"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                <td className="px-6 py-4 text-sm">{formatDateTime(contact.createdAt)}</td>

                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="px-6 py-8 text-center text-gray-500">
                  No Contacts found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="p-6 flex items-center justify-between border-t">
        <p className="text-sm text-gray-500">
          Showing {Math.min(startIndex + 1, contactList.length)} to {Math.min(endIndex, contactList.length)} of {contactList.length} contacts
        </p>

        {totalPages > 1 && (
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrevious}
              disabled={currentPage === 1}
              className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 ${
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
                  className={`px-3 py-1 rounded ${
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
              className={`flex items-center px-3 py-1 border rounded hover:bg-gray-50 ${
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
