"use client";
import { useEffect, useState } from "react";
import { Ticket, tickets as mockTickets } from "@/data/mockData";
import TicketRow from "@/components/TicketRow";

export default function TicketsPage() {
  const [loading, setLoading] = useState(true);
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setTickets(mockTickets);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">
          Your IT Tickets
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          View your submitted support requests and their status.
        </p>
      </div>

      {loading ? (
        <p className="text-gray-500 dark:text-gray-400 animate-pulse">Loading tickets...</p>
      ) : tickets.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No tickets submitted yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700 bg-white dark:bg-gray-900">
            <thead className="bg-gray-100 dark:bg-gray-800 text-left text-sm font-semibold text-gray-700 dark:text-gray-300">
              <tr>
                <th className="px-6 py-3">Issue Type</th>
                <th className="px-6 py-3">Status</th>
                <th className="px-6 py-3">Created</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-700 dark:text-gray-200 divide-y divide-gray-100 dark:divide-gray-800">
              {tickets.map((ticket) => (
                <TicketRow key={ticket.id} ticket={ticket} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}