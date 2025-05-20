"use client";
import StaffCard from "@/components/StaffCard";
import { Staff, staffList } from "@/data/mockData";
import { useEffect, useState } from "react";

export default function StaffDirectory() {
  const [loading, setLoading] = useState(true);
  const [staff, setStaff] = useState<Staff[]>([]);
  
    useEffect(() => {
      // Simulate API call
      setTimeout(() => {
        setStaff(staffList);
        setLoading(false);
      }, 1000);
    }, []);
  

  return (
    <div className="space-y-8">

      <div>
        <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white">Staff Directory</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          View all registered staff members and their system activity.
        </p>
      </div>

    {loading ? (
        <p className="text-gray-500 dark:text-gray-400 animate-pulse">Loading Staff Details...</p>
      ) : staffList.length === 0 ? (
        <p className="text-gray-500 dark:text-gray-400">No Data Available...</p>
      ) : (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {staffList.map((staff) => (
          <StaffCard key={staff.id} staff={staff} />
        ))}
      </div>
      )}

    </div>
  );
}