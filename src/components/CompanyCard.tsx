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
    <div className="shadow-md rounded-xl p-4 hover:shadow-lg flex flex-col items-center justify-center gap-6 min-h-[250px] text-center text-balance">
      <div className="flex flex-col items-center gap-3 w-full">
        <p className="font-bold text-4xl">{name}</p>
        <p className="text-gray-500 uppercase text-sm text-center">{industry}</p>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
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
