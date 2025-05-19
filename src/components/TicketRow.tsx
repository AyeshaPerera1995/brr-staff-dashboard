import { Ticket } from "@/data/mockData";

export default function TicketRow({ ticket }: { ticket: Ticket }) {
  return (
    <tr className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
      <td className="px-6 py-3">{ticket.type}</td>
      <td className="px-6 py-3">
        <span
          className={`px-2 py-1 rounded-full text-xs font-medium ${
            ticket.status === "Open"
              ? "bg-red-100 text-red-700 dark:bg-red-900/20 dark:text-red-300"
              : ticket.status === "In Progress"
              ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/20 dark:text-yellow-300"
              : "bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-300"
          }`}
        >
          {ticket.status}
        </span>
      </td>
      <td className="px-6 py-3">{ticket.created}</td>
    </tr>
  );
}