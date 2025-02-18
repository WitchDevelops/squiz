import React from "react";
import { Company } from "../types/types";
import { Building2 } from "lucide-react";

export const CompanyListItem: React.FC<Company> = ({
  name,
  country,
  industry,
  numberOfEmployees,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Building2 size={20} />
      <div className="flex flex-col w-full">
        <div className="flex justify-between w-full">
          <p>{name}</p>
          <p>{country}</p>
        </div>

        <p>{industry}</p>
        <p>Total Employees: {numberOfEmployees}</p>
      </div>
    </div>
  );
};
