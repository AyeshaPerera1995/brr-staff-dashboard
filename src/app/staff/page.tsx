"use client";
import StaffCard from "@/components/StaffCard";
import { staffList } from "@/data/mockData";

export default function StaffDirectory() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Staff Directory</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          View all registered staff members and their system activity.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffList.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </div>
    </div>
  );
}