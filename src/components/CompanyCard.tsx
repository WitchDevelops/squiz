import React from "react";

interface CompanyCardProps {
  name: string;
  country: string;
  industry: string;
  numberOfEmployees: number;
}

export const CompanyCard: React.FC<CompanyCardProps> = ({
  name,
  country,
  industry,
  numberOfEmployees,
}) => {
  return (
    <div className="shadow-md rounded-xl hover:shadow-lg flex flex-col items-center justify-between text-center text-balance overflow-hidden">
      <div className="flex flex-col items-center gap-3 w-full bg-blue-950 py-4 px-2">
        <p className="font-bold text-4xl text-yellow-500">{name}</p>
        <p className="text-yellow-500 uppercase text-sm text-center">{industry}</p>
      </div>

      <div className="grid xs:grid-cols-1 sm:grid-cols-2 gap-4 w-full py-4 min-h-[100px] h-full bg-slate-50">
        <div className="flex flex-col gap-1 items-center">
          <p className="text-gray-500 uppercase text-sm">Country</p>
          <p className="text-foreground font-bold text-xl">{country}</p>
        </div>
        <div className="flex flex-col gap-1 items-center">
          <p className="text-gray-500 uppercase text-sm">Employees</p>
          <p className="text-foreground font-bold text-xl">{numberOfEmployees}</p>
        </div>
      </div>
    </div>
  );
};
