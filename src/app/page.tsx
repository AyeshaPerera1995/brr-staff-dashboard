import Card from "@/components/Card";
import { FiAlertCircle, FiList, FiClock } from "react-icons/fi";

export default function Home() {
  const Tickets = 16;
  const Tasks = 15;
  const openTickets = 4;
  const pendingTasks = 7;
  const latestUpdate = "System patch scheduled";

  return (
    <div className="space-y-12">
      
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-10 rounded-2xl shadow-lg">
        <div className="max-w-4xl mx-auto text-center space-y-2">
          <h1 className="text-4xl sm:text-4xl font-extrabold tracking-tight">Welcome to BRR Staff Dashboard</h1>
          <p className="text-md sm:text-lg text-gray-100">
            Manage your team's workflow, tasks, and updates in one place.
          </p>
        </div>
      </section>

      {/* Cards Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card
            title="Open Tickets"
            value={openTickets}
            icon={<FiAlertCircle />}
          />
          <Card
            title="Pending Tasks"
            value={pendingTasks}
            icon={<FiList />}
          />
          <Card
            title="Latest Update"
            value={latestUpdate}
            icon={<FiClock />}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-10">
          <Card
            title="All Tickets"
            value={Tickets}
            icon={<FiAlertCircle />}
          />
          <Card
            title="All Tasks"
            value={Tasks}
            icon={<FiList />}
          />
        </div>
      </section>
    </div>
  );
}
