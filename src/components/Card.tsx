import React from "react";

type CardProps = {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
};

export default function Card({ title, value, icon }: CardProps) {
  return (
    <div className="bg-white hover:shadow-lg transition-shadow duration-300 p-6 rounded-2xl flex flex-col gap-2 w-full border border-gray-200">
      <div className="flex items-center justify-between text-gray-600">
        <h3 className="text-md font-semibold">{title}</h3>
        {icon && <div data-testid="card-icon" className="text-2xl text-indigo-500 cursor-pointer">{icon}</div>}
      </div>
      <div className="text-3xl font-bold text-gray-900">{value}</div>
    </div>
  );
}

