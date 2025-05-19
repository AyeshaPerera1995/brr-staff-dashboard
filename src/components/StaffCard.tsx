import { Staff } from "@/data/mockData";
import {
  HiCheckCircle,
  HiXCircle,
  HiDesktopComputer,
  HiDeviceTablet,
} from "react-icons/hi";

// type StaffCardProps = {
//   staff : Staff;
// }

export default function StaffCard({ staff }: { staff: Staff }) {
  const isActive = staff.status === "active";
  const isDesktop = staff.device.toLowerCase().includes("mac") || staff.device.toLowerCase().includes("imac");

  return (
    <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-5 shadow-sm hover:shadow-md transition-all flex flex-col gap-3">
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
          {staff.name}
        </h3>
        <span
          className={`flex items-center gap-1 text-sm font-medium ${
            isActive
              ? "text-green-600 dark:text-green-400"
              : "text-red-600 dark:text-red-400"
          }`}
        >
          {isActive ? <HiCheckCircle /> : <HiXCircle />}
          {isActive ? "Active" : "Inactive"}
        </span>
      </div>

      <p className="text-sm text-gray-600 dark:text-gray-300">{staff.role}</p>
      <p className="text-sm text-blue-600 dark:text-blue-400">{staff.email}</p>

      <div className="mt-3 space-y-1 text-xs text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800 rounded p-3">
        <p>
          <strong>Last Login:</strong> {staff.lastLogin}
        </p>
        <p>
          <strong>Drive Usage:</strong> {staff.driveUsage}
        </p>
        <p className="flex items-center gap-2">
          <strong>Device:</strong>{" "}
          {isDesktop ? (
            <HiDesktopComputer className="text-lg" />
          ) : (
            <HiDeviceTablet className="text-lg" />
          )}
          {staff.device}
        </p>
      </div>
    </div>
  );
}